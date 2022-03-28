import styled from "styled-components";

const Container = styled.div`
  padding: 72px 0;
  width: 611+406+25;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

export default Container;
