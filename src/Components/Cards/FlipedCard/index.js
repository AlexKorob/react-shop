import { connect } from 'react-redux';
import { addProductToCart } from 'Redux/Actions/cart';
import { selectProduct } from 'Redux/Actions/products';
import { FlippedCard } from './FlipedCard';


const actions = {
  addProductToCart,
  selectProduct,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export const Card = connect(mapStateToProps, actions)(FlippedCard);