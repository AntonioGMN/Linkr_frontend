import styled from "styled-components";

const PostsStyle = styled.section`
	width: 611px;

	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (max-width: 1000px) {
		width: 100vh;
	}
`;

const PostStyle = styled.article`
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

	a {
		font-family: Lato;
		font-size: 19px;
		font-style: normal;
		font-weight: 400;
		line-height: 23px;
		color: #ffffff;
	}

	@media (max-width: 1000px) {
		width: 100vw;
		border-radius: 0px;
	}
`;

const Snippet = styled.a`
	height: 155px;
	width: 503px;

	border: 1px solid #4d4d4d;
	border-radius: 11px;
	margin-top: 8px;
	display: flex;

	div {
		padding-left: 5px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	p {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 19px;
		color: #cecece;

		:last-child {
			font-size: 11px;
			line-height: 13px;
		}
	}

	span {
		font-size: 11px;
		font-weight: 400;
		line-height: 13px;
		color: #9b9595;
		margin: 5px 0 13px 0;
	}

	img {
		width: 153.44px;
		height: 155px;

		border-radius: 0px 12px 13px 0px;
	}

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

const ErroMensagem = styled.div`
	width: 100%;
	height: 236px;
	padding: 10px;

	border: 1px solid #4d4d4d;
	border-radius: 11px;
	background: #171717;

	font-size: 27px;
	font-style: normal;
	font-weight: 700;
	line-height: 40px;
	text-align: left;
	color: #b7b7b7;
`;

export { PostsStyle, PostStyle, Snippet, ErroMensagem };
