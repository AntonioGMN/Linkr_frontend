import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 37%;
  min-height: 100vh;
  padding: 0 51px;

  @media (max-width: 1000px) {
    justify-content: flex-start;

    width: 100%;
    min-height: calc(100vh - 175px);
    padding: 40px 22px;
  }
`;

export default FormContainer;
