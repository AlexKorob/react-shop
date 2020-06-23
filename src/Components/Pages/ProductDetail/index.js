import { connect } from "react-redux";
import { ProductDetail as ProductDetailComponent } from "./ProductDetail";

const mapStateToProps = state => ({
  product: state.products.selectedProduct,
});

export const ProductDetail = connect(mapStateToProps)(ProductDetailComponent);
