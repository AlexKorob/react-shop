export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
export const SET_COUNT_FOR_PRODUCT_IN_CART = "SET_COUNT_FOR_PRODUCT_IN_CART";

export const addProductToCart = (item) => ({
  type: ADD_PRODUCT_TO_CART,
  item,
});

export const deleteProductFromCart = (item) => ({
  type: DELETE_PRODUCT_FROM_CART,
  item,
});

export const setCountForProductInCart = (item, count) => ({
  type: SET_COUNT_FOR_PRODUCT_IN_CART,
  item,
  count,
});