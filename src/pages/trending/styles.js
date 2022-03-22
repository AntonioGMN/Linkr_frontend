import styled from "styled-components";

const TrendingStyle = styled.aside`
  height: 406px;
  width: 301px;
  border-radius: 16px;

  background: #171717;

  position: sticky;
  top: 160px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export { TrendingStyle };
