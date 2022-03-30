import { AiOutlineComment } from "react-icons/ai";
import styled from "styled-components";

import Curtidas from "./curtidas";

export function CommentIcon({ onClick }) {
	return (
		<AiOutlineComment className="icon" size={25} style={{fill: "white"}} onClick={onClick} />
	);
}

const Comments = styled(Curtidas)``;

export default Comments;