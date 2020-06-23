export const API_CALL = 'API_CALL';

export const api = (data) => ({
  type: 'API_CALL',
  fields: data,
})