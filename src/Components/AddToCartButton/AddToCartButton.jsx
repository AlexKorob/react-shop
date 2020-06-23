import React from 'react';
import { AddToCartButton as AddToCartButtonStyled } from './styles';
import cart_url from 'assets/images/cart.svg';


export const AddToCartButton = ({cart, addProductToCart, item}) => {
  const handleClickAddToCart = (event) => {
		const is_item_in_cart = cart.find(el => {
			if (el.id === item.id) return true;
			return undefined;
		})
		if (is_item_in_cart) {
			const question = "This item already in your Cart. Are you sure you want" +
			 									"to add more?";
			if (window.confirm(question)) {
				addProductToCart(item);
			}
		}
		else {
			addProductToCart(item);
		}
  }

  return (
    <AddToCartButtonStyled onClick={handleClickAddToCart}>
      Add to <br />
      <img src={cart_url} alt="cart" />
    </AddToCartButtonStyled>
  );
}