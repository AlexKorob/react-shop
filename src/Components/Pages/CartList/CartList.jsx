import React from 'react';
import { CartItem, Image } from './styles';
import { Layout } from 'UI/Layout/index';
import noImageUrl from 'assets/images/no-image.jpg';


export const CartList = ({ deleteProductFromCart,
                           setCountForProductInCart,
                           cart}) => {

  let content;
  if (cart.length === 0) {
    content = <div>Your Cart is Empty</div>;
  }
  else {
    content = cart.map(product => (
      <CartItem key={product.id}>
        <Image src={ product.images[0].image || noImageUrl } alt="product"/>
        <h3>{product.title}</h3>
        <div className='price'>{product.price}$</div>
        <div className='count-container'>
          <button>+</button>
          <input type="text" value={product.count}/>
          <button>-</button>
        </div>
        <button className="delete-product">X</button>
      </CartItem>
    ));
  }

  return (
    <Layout content={content} defaultKey='3'>
    </Layout>
  );
}