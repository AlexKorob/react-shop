import { reducerWrapper } from "Helpers/Reducers";
import { GET_PRODUCTS, SELECT_PRODUCT } from 'Redux/Actions/products';

const initialData = {
  products: [],
  isLoader: false,
  error: null,
  selectedProduct: null,
}

const products = {
  [SELECT_PRODUCT]: (state, action) => ({
    ...state,
    selectedProduct: action.product,
  }),
  [GET_PRODUCTS.SUCCESS]: (state, {data}) => ({
    ...state,
    products: data,
    isLoader: false,
  }),
  [GET_PRODUCTS.FAIL]: (state, {error}) => ({
    ...state,
    error: error
  }),
  [GET_PRODUCTS.REQUEST]: (state) => ({
    ...state,
    isLoader: true,
  })
};


export default reducerWrapper(products, initialData);