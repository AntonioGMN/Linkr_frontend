import { BiRepost } from "react-icons/bi";

import StyledAction from "./styles";

function RepostIcon({ onClick }) {
	return (
		<BiRepost className="icon" size={25} style={{fill: "white"}} onClick={onClick} />
	);
}

export default function RepostAction({ onClick, count }) {
	return (
		<StyledAction>
			<RepostIcon onClick={onClick} />
			<span>{count} re-posts</span>
		</StyledAction>
	);
}
