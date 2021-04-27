import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ProductItem,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductQuantityArea,
  ProductQtIcon,
  ProductQtText
} from './styles';

export default ({ data, index }) => {
  const dispatch = useDispatch();
  
  return (
    <ProductItem>
      <ProductPhoto src={data.image} />
      <ProductInfoArea>
        <ProductName>{data.name}</ProductName>
        <ProductPrice>{Number((data.price * data.quantity)).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}</ProductPrice>
      </ProductInfoArea>
      <ProductQuantityArea>
        <ProductQtIcon src="/assets/minus.png" onClick={() => {
          dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {
              key: index,
              type: 'minus'
            }
          });
        }} />
        <ProductQtText>{data.quantity}</ProductQtText>
        <ProductQtIcon src="/assets/plus.png" onClick={() => {
          dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {
              key: index,
              type: 'plus'
            }
          });
        }} />
      </ProductQuantityArea>
    </ProductItem>
  )
}