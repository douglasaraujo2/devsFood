import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  @media(max-width:600px){
      flex-direction: column;
  }
`;

export const Menu = styled.div`
    display: flex;
    background-color: #136713;
    width: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width:600px){
      flex-direction: row;
      width:100%;
      justify-content: space-around;
    }
`;

export const PageBody = styled.div`
    display: flex;
    background-color: #00980d;
    background-image: url('/assets/bg.png');
    flex: 1;
    overflow-y: auto;
`;
