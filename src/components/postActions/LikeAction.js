import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import StyledAction from "./styles";

export function NotLikedIcon({ onClick }) {
	return (
		<AiOutlineHeart className="icon" size={25} style={{fill: "white"}} onClick={onClick} />
	);
}

export function LikedIcon({ onClick }) {
	return (
		<AiFillHeart className="icon" size={25} style={{fill: "red"}} onClick={onClick} />
	);
}

export default function LikeAction({ onClick, count, isLiked }) {
  <StyledAction>
    {isLiked ?
      <LikedIcon onClick={onClick} /> :
      <NotLikedIcon onClick={onClick} />}
    <span>{count} likes</span>
  </StyledAction>
}
