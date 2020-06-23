import { combineReducers } from 'redux';
import cart from 'Redux/Reducers/Cart';
import products from 'Redux/Reducers/Products';
import user from 'Redux/Reducers/User';

export const appReducer = combineReducers({
  products,
  cart,
  user,
});