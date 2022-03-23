import styled from "styled-components";

const Input = styled.input`
  all: unset;
  box-sizing: border-box;

  padding: 0 17px;
  width: 429px;
  height: 65px;
  border-radius: 6px;
  background-color: white;

  font-family: Oswald;
  font-weight: bold;
  font-size: 27px;
  color: #151515;

  ::placeholder {
    color: #9f9f9f;
  }

  /* @media (max-width: 1000px) {
    width: 100%;
  } */
`;

export default Input;
