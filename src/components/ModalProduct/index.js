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
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage src="/assets/minus.png" onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1)
                }
              }} />
              <ProductQtText>{quantity}</ProductQtText>
              <ProductQtImage src="/assets/plus.png" onClick={() => {
                setQuantity(quantity + 1);
              }} />
            </ProductQuantity>
            <ProductPrice>{Number((data.price * quantity)).toLocaleString("pt-BR", {
              style: 'currency',
              currency: 'BRL'
            })}</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton small={true} onClick={() => {
          setStatus(false);
        }}>Cancelar</ProductButton>
        <ProductButton onClick={() => {
          dispatch({
            type: 'ADD_PRODUCT',
            payload: {
              data,
              quantity
            }
          })
          dispatch({
            type: "SET_DELIVERY_RATE",
            payload: {
              deliveryRate: 7.99
            }
          })
          setStatus(false);
        }}>Adicionar ao carrinho</ProductButton>
      </ProductButtons>
    </Container>
  )
}
