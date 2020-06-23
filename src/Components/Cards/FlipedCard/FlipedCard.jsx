import React, { useState } from 'react';
import CardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';

import { AddToCartButton } from 'Components/AddToCartButton'
import { DetailButton, AntdCard, AntdCardBack } from './styles';

const { Meta } = AntdCard;


export const FlippedCard = ({
	item,
	addProductToCart,
	selectProduct,
	cart,
	...rest
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

	const handleClickOnCard = () => {
		setIsFlipped(!isFlipped);
	}

	return (
		<CardFlip
			isFlipped={isFlipped}
      flipDirection="horizontal"
			// flipSpeedBackToFront={0.05}
		>
			<AntdCard
				hoverable
        onClick={handleClickOnCard}
        onMouseOver={() => setIsFlipped(true)}
				cover={
          <img alt="example" src={item.images[0].image} />}
			>
				<Meta title={item.title} />
			</AntdCard>

			<AntdCardBack
        hoverable
				onMouseLeave={() => setIsFlipped(false)}
				cover={<img alt="example" src={item.images[1] ? item.images[1].image : item.images[0].image} />}
			>
				<Meta title={`${item.price}$`} style={{textAlign: 'center'}} />
				<DetailButton>
					<Link to={`/detail/${item.id}`} onClick={() => selectProduct(item)}> Detail </Link>
				</DetailButton>
				<AddToCartButton item={item}></AddToCartButton>
			</AntdCardBack>
		</CardFlip>
	);
}
