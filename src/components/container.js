import styled from "styled-components";

const Container = styled.main`
	padding: 72px 0;
	width: 611+406+25;
	height: 100% - 72px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}

	@media (max-width: 800px) {
		width: 100%;
	}
`;

export default Container;
