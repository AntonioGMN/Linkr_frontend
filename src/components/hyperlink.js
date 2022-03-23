import { Link } from "react-router-dom";
import styled from "styled-components";

const Hyperlink = styled(Link)`
  font-weight: regular;
  font-size: 20px;
  color: white;

  text-decoration: underline;

  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export { Hyperlink };
