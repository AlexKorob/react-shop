import { connect } from "react-redux";

import { CartList as CartListComponent } from './CartList'
import { deleteProductFromCart,
         setCountForProductInCart } from "Redux/Actions/cart";

const actions = {
  deleteProductFromCart,
  setCountForProductInCart,
}

const state = (state) => ({
  cart: state.cart,
});

export const CartList = connect(state, actions)(CartListComponent)