import styled from "styled-components";
import cart_url from 'assets/images/main-cart-item.svg';


export const StyledCart = styled.div`
  position: fixed;
  z-index: 9;
  bottom: 30px;
  right: 30px;
  background-image: url(${cart_url});
  width: 50px;
  height: 50px;
  cursor: pointer;
`

export const CircleInsideCart = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: #a33;
  color: white;
  position: absolute;
  text-align: center;
  top: -10px;
  right: -10px;
`