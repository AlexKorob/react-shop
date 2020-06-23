import React from 'react';
import { StyledCart, CircleInsideCart } from './styles';


export const Cart = ({cart, ...rest}) => {
  if (cart.length === 0) {
    return null;
  }

  const handleClick = () => {
    const { history } = rest;
    history.push("/cart/");
  }

  return (
    <StyledCart className="cart" onClick={handleClick}>
      <CircleInsideCart>{cart.length}</CircleInsideCart>
    </StyledCart>
  );
}