import styled from "styled-components";

const PostsStyle = styled.section`
	width: 611px;

	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-top: 29px;

	@media (max-width: 800px) {
		width: 100vw;
		margin: 0;
	}
`;

export default PostsStyle;
