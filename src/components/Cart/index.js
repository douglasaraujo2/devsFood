import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProductItem from "../CartProductItem";
import {
  CartArea,
  CartHeader,
  CartBody,
  CartIcon,
  CartText,
  ProductsArea,
  DeliveryArea,
  DeliveryTitle,
  DeliveryAddressTitle,
  DeliveryAddressStreet,
  DeliveryAddressCityState,
  DeliveryAddress,
  DeliveryAddressArea,
  DeliveryEditButton,
  DiscountArea,
  DiscountTitle,
  DiscountField,
  InvalidDiscount,
  TotalsArea,
  TotalItem,
  TotalTitle,
  TotalValue,
  FinishOrderButton
} from "./styles";

export default ({ setModalAddressStatus }) => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.cart.products);
  const totalItems = useSelector(state => state.cart.total);
  const deliveryRate = useSelector(state => state.cart.deliveryRate);
  const discount = useSelector(state => state.cart.discount);

  const [show, setShow] = useState(false);
  const [discountTicket, setDiscountTicket] = useState("");
  const [invalidTicket, setInvalidTicket] = useState(false);

  const subTotal = (totalItems > 0 ? (Number(totalItems) + Number(deliveryRate) - Number(discount)) : 0);

  useEffect(() => {
    let totalItems = products.map(product => product.price * product.quantity);
    totalItems = totalItems.length ? totalItems.reduce((a, b) => a + b) : 0;
    if (products.length === 0) {
      setShow(false);
    }
    dispatch({
      type: 'SET_TOTAL',
      payload: {
        totalItems
      }
    })
  }, [dispatch, products])

  return (
    <CartArea active={show}>
      <CartHeader active={show} onClick={() => {
        if (products.length > 0) {
          setShow(!show);
        }
      }}>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu carrinho ({products.length})</CartText>
        {show &&
          <CartIcon src="/assets/down.png" />
        }
      </CartHeader>
      <CartBody show={show}>
        <ProductsArea>
          {products.map((product, index) => {
            return (
              <CartProductItem data={product} key={index} index={index} />
            )
          })}
        </ProductsArea>
        <DeliveryArea>
          <DeliveryTitle>Entrega</DeliveryTitle>
          <DeliveryAddressArea>
            <DeliveryAddress>
              <DeliveryAddressTitle>Minha Casa</DeliveryAddressTitle>
              <DeliveryAddressStreet>Rua bla bla bla, 999</DeliveryAddressStreet>
              <DeliveryAddressCityState>Cidade, Estado</DeliveryAddressCityState>
            </DeliveryAddress>
            <DeliveryEditButton src="/assets/edit.png" onClick={() => {
              setModalAddressStatus(true);
            }} />
          </DeliveryAddressArea>
        </DeliveryArea>
        <DiscountArea>
          <DiscountTitle>Cupom de Desconto</DiscountTitle>
          <DiscountField
            type="text"
            value={discountTicket}
            onChange={(e) => setDiscountTicket(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setInvalidTicket(false);
                if (discountTicket === "jojocupom") {
                  dispatch({
                    type: "SET_DISCOUNT",
                    payload: {
                      discount: 10.00
                    }
                  })
                } else {
                  dispatch({
                    type: "SET_DISCOUNT",
                    payload: {
                      discount: 0
                    }
                  })
                  if (discountTicket) {
                    setInvalidTicket(true);
                  }

                }
              }
            }}
          />
          {invalidTicket &&
            <InvalidDiscount>Cupom inválido</InvalidDiscount>
          }
        </DiscountArea>
        <TotalsArea>
          <TotalItem>
            <TotalTitle>Desconto</TotalTitle>
            <TotalValue>{Number(discount).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</TotalValue>
          </TotalItem>
          <TotalItem>
            <TotalTitle>Taxa de entrega</TotalTitle>
            <TotalValue>{Number(deliveryRate).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</TotalValue>
          </TotalItem>
          <TotalItem>
            <TotalTitle>Total</TotalTitle>
            <TotalValue>{Number(subTotal).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</TotalValue>
          </TotalItem>
        </TotalsArea>
        <FinishOrderButton>FINALIZAR COMPRA</FinishOrderButton>

      </CartBody>
    </CartArea>
  );
};
