import React from 'react';
import { Layout } from 'UI/Layout/index';
import { Card } from 'Components/Cards/FlipedCard';
import { useEffect } from 'react';


export const ProductList = ({products, getProducts, ...rest}) => {
  useEffect(() => {
    getProducts();
  }, []);

  const renderCarts = products && products.map(el => (
    <Card
      key={el.id}
      item={el}
    />
  ))

  return (
      <Layout content={
        <div style={{flexWrap: "wrap", display: "flex"}}>
          {renderCarts}
        </div>
      }/>
  );
};
