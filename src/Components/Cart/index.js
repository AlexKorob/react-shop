import React from 'react';
import { connect } from "react-redux";
import { Cart as CartComponent } from "./Cart";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const WrappedCartComponent = withRouter(props => <CartComponent {...props}/>);

export const Cart = connect(mapStateToProps)(WrappedCartComponent);
