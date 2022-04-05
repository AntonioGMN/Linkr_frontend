import styled from "styled-components";

export const PostContainer = styled.div`
	background-color: #1e1e1e;
	border-radius: 16px;

	.repost-label {
		display: flex;
		align-items: center;

		width: 100%;
		height: 33px;
		padding: 0 13px;

		font-size: 13px;

		p {
			margin-left: 5px;
			color: white;
		}

		a {
			font-weight: bold;
			color: white;
		}
	}
`;

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
		object-fit: cover;
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

	.trash-icon {
		position: absolute;
		top: 23px;
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
