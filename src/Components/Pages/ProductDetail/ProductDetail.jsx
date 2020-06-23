import React from 'react';
import { Layout } from 'UI/Layout/index';
import Swiper from 'Components/Swiper/swiper';
import { AddToCartButton } from 'Components/AddToCartButton/index';


export const ProductDetail = ({ match, product }) => {
  const id = parseInt(match.params.id);
  const images = product.images.map(image => {
    return image.image;
  });
  const title = product.title;
  const price = product.price;
  const description = product.description;

  return (
    <Layout defaultKey='2' content={
      <>
        <h2>{title} ID: {id}</h2>
        <Swiper images={images}/>
        <div>Price: {price}$</div>
        <h3>Description:</h3>
        <div>{description}</div>
        <AddToCartButton item={product} />
      </>
    }/>
  );
};