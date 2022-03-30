import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

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

const Curtidas = styled.div`
	width: 50px;

	display: flex;
	flex-direction: column;

	.icon {
		align-self: center;
	}

	span {
		align-self: center;

		font-size: 11px;
		font-weight: 400;
		line-height: 13px;
		letter-spacing: 0em;
		text-align: center;
		color: #ffffff;
	}

	/* .like-tooltip {
		width: 500px;
		height: 20px;

		font-weight: bold;
		font-size: 11px;
	} */

	/* .like-tooltip {
		text-align: center;

	  margin-top: 200px;
  	height: 40px;
	} */

	@media (max-width: 800px) {
		width: 40px;

		span {
			font-size: 9px;
			line-height: 11px;
		}
	}
`;

export default Curtidas;
