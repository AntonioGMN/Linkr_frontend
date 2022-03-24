import styled from "styled-components";

import Container from "../container";

const authContainer = styled(Container)`
  width: 100%;

  flex-direction: row;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default authContainer;
