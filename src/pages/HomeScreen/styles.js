import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

export const CategoryArea = styled.div`
  color: #fff;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const CategoryList = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const ProductArea = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  @media(max-width:600px){
    grid-gap: 10px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductPaginationArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  @media(max-width:600px){
    z-index: 99999;
    margin-bottom: 20px;
  }
`;

export const ProductPaginationItem = styled.div`
  background-color: ${(props) =>
    props.active === props.current ? "#CCC" : "#fff"};
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  margin-right: 10px;
  @media (max-width:600px){
    margin-bottom: 10px;
  }
`;
