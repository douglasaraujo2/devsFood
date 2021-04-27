import styled from 'styled-components';
export const ProductItem = styled.div`
  display: flex;
  margin: 10px;
`;

export const ProductPhoto = styled.img`
  width: 64px;
  height:auto;
  border-radius:10px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const ProductName = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  font-size: 13px;
`;

export const ProductQuantityArea = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductQtIcon = styled.img`
  width: 13px;
  height: auto;
  cursor: pointer;
`;

export const ProductQtText = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin: 0 5px;
`;