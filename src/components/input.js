import styled from "styled-components";

const Input = styled.input`
  all: unset;
  box-sizing: border-box;

  padding: 0 17px;
  width: 100%;
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

  @media (max-width: 1000px) {
    height: 56px;

    font-size: 22px;
  }
`;

export default Input;
