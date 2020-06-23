import { combineReducers } from 'redux';
import cart from 'Redux/Reducers/Cart';
import products from 'Redux/Reducers/Products';

export const appReducer = combineReducers({
  products,
  cart,
});