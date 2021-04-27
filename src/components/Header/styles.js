import styled from "styled-components";

export const Container = styled.div`
  background-color: #136713;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width:600px){
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 70px;
  @media(max-width:600px){
    margin-bottom: 20px;
    height: 30px;
  }
`;

export const SearchInput = styled.input`
  border: 0;
  border-radius: 25px;
  width: ${(props) => (props.active ? 300 : 0)}px;
  height: 50px;
  background-color: #fff;
  background-image: url("/assets/search.png");
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  outline: 0;
  padding-left: 50px;
  transition: all ease .2s;
  cursor: pointer;
  font-size: 15px;
  &:focus{
      cursor: text;
  }
  @media(max-width:600px){
    width: ${(props) => (props.active ? 230 : 0)}px;y
  }
`;
