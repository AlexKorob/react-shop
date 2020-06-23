import { connect } from 'react-redux';

import { addProductToCart } from 'Redux/Actions/cart';
import { AddToCartButton as AddToCartButtonComponent } from './AddToCartButton';

const mapState = (state) => ({
  cart: state.cart,
});

const actions = {
  addProductToCart,
}

export const AddToCartButton = connect(mapState, actions)(AddToCartButtonComponent);