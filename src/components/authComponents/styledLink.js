import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
  text-decoration: underline solid 1px;
  text-align: center;

  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  @media (max-width: 1000px) {
    font-size: 17px;
    line-height: normal;
  }
`;

export default StyledLink;
