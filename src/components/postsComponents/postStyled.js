import styled from "styled-components";

const PostStyle = styled.article`
	position: relative;

	width: 100%;
	height: 276px;
	border-radius: 16px;
	background-color: #171717;
	display: flex;
	gap: 18px;
	padding: 20px;

	img {
		width: 50px;
		height: 50px;
		border-radius: 50px;
		margin-bottom: 15px;
	}

	div {
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
		font-size: 17px;
		font-weight: 700;
		line-height: 20px;
		color: #FFFFFF;
	}

	a {
		font-family: Lato;
		font-size: 19px;
		font-style: normal;
		font-weight: 400;
		line-height: 23px;
		color: #ffffff;
	}

	textarea {
		all: unset;
		box-sizing: border-box;

		width: 100%;
		height: 44px;
		margin-top: 5px;
		padding: 9px;

		background: #FFFFFF;
		border-radius: 7px;

		:disabled {
			opacity: 0.7;
		}
	}

	.icons {
		width: 57px;
		height: 20px;

		flex-direction: row;
		justify-content: space-between;

		position: absolute;
		top: 21px;
		right: 23px;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 10px;
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

export default PostStyle;
