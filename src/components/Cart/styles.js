import styled from "styled-components";

export const CartArea = styled.div`
  background-color: #136713;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 30px;
  max-height: 90vh;
  overflow: auto;
  transition: all ease .3s;
  @media(max-width:600px){
    width: 100%;
    max-height: 95vh;
    height: ${props => props.active ? '95vh' : 'auto'};
    border-radius: 0;
    left:0;
  }
`;

export const CartHeader = styled.div`
  width: 290px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media(max-width:600px){
    /* width: ${props => props.active ? '100%' : '200px'}; */
    /* justify-content:center; */
    /* align-items: center;   */
    /* align-self: center; */
  }
`;

export const CartBody = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  transition: all ease .3s;
  color: #fff;
`;

export const CartIcon = styled.img`
  width: 23px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;

`;

export const CartText = styled.div`
flex: 1;
  color: #fff;
  font-size: 17px;
`;



export const ProductsArea = styled.div``;

export const DeliveryArea = styled.div`
  margin: 20px 10px;
`;

export const DeliveryTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DeliveryAddressTitle = styled.div`
  font-style: italic;
  font-size: 15px;
`;
export const DeliveryAddressArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
`;

export const DeliveryAddressStreet = styled.div``;

export const DeliveryAddressCityState = styled.div``;

export const DeliveryAddress = styled.div``;

export const DeliveryEditButton = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;
`;

export const DiscountArea = styled.div`
  margin: 10px;
`;

export const DiscountTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
`;

export const DiscountField = styled.input`
  width: 260px;
  border-radius: 10px;
  height: 35px;
  border:0;
  outline: 0;
  background-color:#E6E6E6;
`;

export const InvalidDiscount = styled.div`
  display: flex;
  justify-content:center;
  font-weight: bold;
  margin-top: 5px;
  color: #f00;
`;

export const TotalsArea = styled.div`
  margin: 20px 10px;
`;
export const TotalItem = styled.div`
  display: flex;
  font-weight: bold;
  margin-bottom: 10px;
  justify-content: space-between;
`;
export const TotalTitle = styled.div`
  font-size: 15px;
`;

export const TotalValue = styled.div`
  font-size:15px;
`;

export const FinishOrderButton = styled.div`
  cursor: pointer;
  font-weight: bold;
  background-color:#073C07;
  width: 260px;
  margin: 20px 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height:50px;
`;