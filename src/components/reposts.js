import { BiRepost } from "react-icons/bi";
import styled from "styled-components";

import Curtidas from "./curtidas";

export function RepostIcon({ onClick }) {
	return (
		<BiRepost className="icon" size={25} style={{fill: "white"}} onClick={onClick} />
	);
}

const Reposts = styled(Curtidas)``;

export default Reposts;
