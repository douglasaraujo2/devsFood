import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductButtons,
  ProductName,
  ProductIngredients,
  ProductButton,
  ProductQuantity,
  ProductPrice,
  ProductQtImage,
  ProductQtText
} from './styles';

export default ({ data, setStatus }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [data])

  return (
    <Container >
      <div>Endereço</div>
      <div>Rua</div>
      <div>Número</div>
      <div>Complemento</div>
    </Container>
  )
}
