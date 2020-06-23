import {ProductList as ProductListComponent} from './ProductList';
import { connect } from 'react-redux';
import { getProducts } from 'Redux/Actions/products';


const mapStateToProps = (state) => ({
  products: state.products.products.data
})

const actions = {
  getProducts,
};


export const ProductList = connect(mapStateToProps, actions)(ProductListComponent);