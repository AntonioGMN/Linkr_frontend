import Container from "../../components/container";

import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginContainer = styled(Container)`
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: #151515;

  width: 63%;
  min-height: 100vh;
  padding-left: 10%;

  font-weight: 700;

  h1 {
    font-family: Passion One;
    font-size: 106px;
    line-height: 117px;
    letter-spacing: 0.05em;
    color: #fff;

  }

  p {
    font-family: Oswald;
    font-size: 43px;
    line-height: 64px;
    color: #fff;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 37%;
  min-height: 100vh;
  padding: 0 51px;
`;

const LoginForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
  text-decoration: underline solid 1px;
  text-align: center;
`;

export { LoginContainer, Aside, FormContainer, LoginForm, StyledLink };
