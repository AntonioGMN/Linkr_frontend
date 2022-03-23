import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 535px;
  height: 100vh;

  /* @media (max-width: 1000px) {
    width: 100%;
    height: calc(100vh - 175px);
  } */
`;

const Page = styled.div`
  display: flex;

  width: 100%;
  min-height: 100vh;

  /* @media (max-width: 1000px) {
    flex-direction: column;
  } */
`;

const HeaderArea = styled.div`
  width: calc(100% - 535px);
  min-height: 100vh;
  background-color: #151515;

  /* @media (max-width: 1000px) {
    width: 100%;
    height: 175px;
  } */
`;

const Header = styled.header`
  margin-top: 20vh;
  margin-left: calc((100vw - 535px) * 0.1);

  /* @media (max-width: 1000px) {
    align-self: center;
  } */
`;

const Title = styled.h2`
  font-family: "Passion One", cursive;
  font-weight: bold;
  font-size: 106px;
  color: white;
`;

const Subtitle = styled.h1`
  font-family: Oswald;
  font-weight: bold;
  font-size: 43px;
  color: white;
`;

export { Form, Page, HeaderArea, Header, Title, Subtitle };
