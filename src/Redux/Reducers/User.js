import { reducerWrapper } from "Helpers/Reducers";
import { LOGIN } from "Redux/Actions/user";

const initialData = {
  isAuth: false,
  profile: null,
  token: null,
  isLoading: false,
  error: null,
}

const user = {
  [LOGIN.SUCCESS]: (state, {data}) => ({
    ...state,
    isAuth: true,
    token: data.data.token,
    isLoading: false,
    error: null,
  }),
  [LOGIN.FAIL]: (state, {error}) => ({
    ...state,
    error: error,
    isLoading: false,
  }),
  [LOGIN.REQUEST]: (state, {data}) => ({
    ...state,
    isLoading: true,
    error: null,
  })
}


export default reducerWrapper(user, initialData);
