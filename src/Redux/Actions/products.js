import { creatorAsyncAction } from "Helpers/asyncActions";
import { api } from "Helpers/api";

export const GET_PRODUCTS = creatorAsyncAction('GET_PRODUCTS');

export const getProducts = () => {
  return api({
    types: GET_PRODUCTS,
    url: '/products',
  });
}

export const SELECT_PRODUCT = 'SELECTED_PRODUCT';

export const selectProduct = (product) => ({
  type: SELECT_PRODUCT,
  product,
});