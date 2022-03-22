import styled from "styled-components";

const Posts = styled.section`
	width: 611px;

	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (max-width: 1000px) {
		width: 100vh;
	}
`;

const Post = styled.article`
	width: 100%;
	height: 276px;
	border-radius: 16px;
	background-color: #171717;
	padding: 20px;

	div {
		display: flex;
	}

	section {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 1000px) {
		border-radius: 0px;
	}
`;

export { Posts, Post };
