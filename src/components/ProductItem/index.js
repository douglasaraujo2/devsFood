import React from "react";
import {
  Container,
  ProductPhotoArea,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductIngredients,
  ProductButtonArea,
  ProductButton,
} from "./styles";
export default ({ data, onClick }) => {
  return (
    <Container onClick={() => { onClick(data) }}>
      <ProductPhotoArea>
        <ProductPhoto src={data.image} />
      </ProductPhotoArea>
      <ProductInfoArea>
        <ProductName>{data.name}</ProductName>
        <ProductPrice>
          {Number(data.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ProductPrice>
        <ProductIngredients>{data.ingredients}</ProductIngredients>
      </ProductInfoArea>
      <ProductButtonArea>
        <ProductButton src="/assets/next.png" />
      </ProductButtonArea>
    </Container>
  );
};
