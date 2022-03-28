import styled from "styled-components";

import Button from "../button"

const PostStyle = styled.article`
	position: relative;

	width: 100%;
	height: 276px;
	border-radius: 16px;
	background-color: #171717;
	display: flex;
	gap: 18px;
	padding: 20px 90px 20px 20px;

	img {
		width: 50px;
		height: 50px;
		border-radius: 50px;
		margin-bottom: 15px;
	}

	div {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		color: "#ffffff";

		:last-child {
			width: 100%;
		}
	}

	p {
		font-size: 19px;
		font-style: normal;
		font-weight: 400;
		line-height: 22.8px;
		color: #ffffff;
	}

	span {
		font-family: Lato;
		font-size: 17px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px;
		letter-spacing: 0em;
		text-align: left;
		color: #b7b7b7;
	}

	strong {
		font-family: Lato;
		font-size: 17px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px;
		letter-spacing: 0em;
		text-align: left;
		color: #ffffff;
	}

	a {
		font-family: Lato;
		font-size: 19px;
		font-style: normal;
		font-weight: 400;
		line-height: 23px;
		color: #ffffff;
	}

	.icons {
		width: 57px;
		height: 20px;

		flex-direction: row;
		justify-content: space-between;

		position: absolute;
		top: 23px;
		right: 23px;
	}

	@media (max-width: 800px) {
		width: 100%;
		border-radius: 0px;
		margin: none;

		img {
			width: 40px;
			height: 40px;
		}
	}
`;

export const ModalText = styled.p`
	font-weight: 700;
	font-size: 34px;
	color: #ffffff;
	text-align: center;
`;

export const ModalButtonsDiv = styled.div`
	display: flex;
	gap: 27px;

	margin-top: 39px;
`;

export const ModalButton = styled(Button)`
	width: 134px;
	height: 37px;
	background-color: ${({ cancel }) => cancel ? 'white' : '#1877f2'};

	font-size: 18px;
	color: ${({ cancel }) => cancel ? '#1877f2' : 'white'};
`;

export default PostStyle;
