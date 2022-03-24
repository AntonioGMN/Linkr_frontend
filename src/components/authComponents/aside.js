import styled from "styled-components";

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

  @media (max-width: 1000px) {
    align-items: center;

    width: 100%;
    min-height: 175px;
    height: 175px;
    padding: 0;

    h1 {
      font-size: 76px;
      line-height: normal;
      letter-spacing: normal;
    }

    p {
      font-size: 23px;
      line-height: normal;
      text-align: center;
    }
  }
`;

export default Aside;
