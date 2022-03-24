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
	padding: 20px;

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

	@media (max-width: 1000px) {
		border-radius: 0px;
	}
`;

const Snippet = styled.a`
	height: 155px;
	width: 503px;
	border-radius: 11px;

	border: 1px solid #4d4d4d;
	margin-top: 8px;
`;

export { PostsStyle, PostStyle, Snippet };
