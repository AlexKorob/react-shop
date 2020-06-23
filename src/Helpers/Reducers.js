export const reducerWrapper = (obj, initialState) => (state, action) => {
  if (!state) {
    return initialState;
  }
  const type = action.type || action.types;
  if (type in obj) {
    return obj[type](state, action);
  }
  return state;
}