import styled from 'styled-components';

export const Container = styled.div`
  width:740px;
  padding: 20px;
  @media(max-width:600px){
    width: 300px;
  }
`;

export const ProductArea = styled.div`
  height: 200px;
  display: flex;
  @media(max-width:600px){
    height: auto;
    flex-direction: column;
  }
`;

export const ProductPhoto = styled.img`
  width:310px;
  border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductQuantityArea = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  @media(max-width:600px){
    align-items: center;
  }

`;

export const ProductButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media(max-width:600px){
    margin-top: 30px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ProductName = styled.div`
  font-size:30px;
  font-weight:bold;
`;

export const ProductIngredients = styled.div`
  font-size:14px;
`;

export const ProductButton = styled.button`
  border: 0;
  background-color: #073C07;
  box-shadow: 4px 5px 0px #999;
  color: #fff;
  font-size: ${props => props.small ? 13 : 22}px;
  font-weight: bold;
  padding: ${props => props.small ? '5px 10px' : '10px 20px'};
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  background-color: #073C07;
  border-radius: 5px;
`;

export const ProductPrice = styled.div`
  font-size:30px;
  font-weight: bold;
`;

export const ProductQtImage = styled.img`
  width: 24px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const ProductQtText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  
`;