import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './styles.css';


const SimpleSwiper = ({images}) => {
  const params = {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <Swiper {...params}>
      {images.map((img, index) => (
        <div key={index}>
          <img key={index} src={img} alt='product' />
        </div>
      ))}
    </Swiper>
  );
};

export default SimpleSwiper;
