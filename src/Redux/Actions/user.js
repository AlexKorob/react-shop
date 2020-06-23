import { creatorAsyncAction } from "Helpers/asyncActions";
import { api } from "Helpers/api";

export const LOGIN = creatorAsyncAction('LOGIN');

export const login = (username, password) => {
  return api({
    types: LOGIN,
    url: '/api-auth-token/',
    method: 'post',
    data: {username, password},
  });
}
