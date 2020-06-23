import Axios from 'axios';
import { API_CALL } from 'Helpers/api';

let api = null;

const apiCall = ({
  baseUrl='http://localhost:8000',
  url='',
  method='get',
  data={},
  headers,
}={}) => {
  method = method.toLowerCase();
  if (!api) {
    api = Axios.create({
      baseURL: baseUrl,
      headers
    });
  }
  return new Promise((resolve, reject) => {
    api({method, url, data})
    .then(response => resolve(response))
    .then(errors => reject(errors))
  });
}


export default store => next => action => {
  if (action.type !== API_CALL) return next(action);

  const {baseUrl, url, method, data, headers, types} = action.fields

  next({type: types.REQUEST});
  const onSuccess = (data) => {
    const successType = types.SUCCESS;
    const successAction = {
      type: successType,
      data,
    }
    next(successAction);
  }

  const onFail = (data) => {
    const failType = types.FAIL;
    const failAction = {
      status: data.status,
      type: failType,
      error: data,
    }
    next(failAction);
  }

  apiCall({baseUrl, url, method, data, headers}).then(onSuccess, onFail);
}
