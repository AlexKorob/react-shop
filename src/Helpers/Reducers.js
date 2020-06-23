export const reducerWrapper = (obj, initialState) => (state, action) => {
  if (!state) {
    return initialState;
  }
  if (action.type in obj) {
    return obj[action.type](state, action)
  }
  return state;
}