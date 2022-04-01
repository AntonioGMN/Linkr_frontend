import { AiOutlineComment } from "react-icons/ai";

import StyledAction from "./styles";

function CommentIcon({ onClick }) {
	return (
		<AiOutlineComment className="icon" size={25} style={{fill: "white"}} onClick={onClick} />
	);
}

export default function CommentAction({ onClick, count }) {
	return (
		<StyledAction>
			<CommentIcon onClick={onClick} />
			<span>{count} comments</span>
		</StyledAction>
	);
}
