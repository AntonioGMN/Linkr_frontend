import styled from "styled-components";

const PostsStyle = styled.section`
	width: 611px;
	max-height: 100%;

	display: flex;
	flex-direction: column;
	gap: 16px;
	overflow: hidden;

	@media (max-width: 800px) {
		width: 100vw;
		margin: 0;
	}
`;

export default PostsStyle;
