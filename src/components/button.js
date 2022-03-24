import styled from "styled-components";

const Button = styled.button`
  all: unset;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 65px;
  border-radius: 6px;
  background-color: #1877f2;

  font-family: Oswald;
  font-weight: bold;
  font-size: 27px;
  color: white;

  cursor: pointer;

  @media (max-width: 1000px) {
    height: 56px;

    font-size: 22px;
  }
`;

export default Button;
