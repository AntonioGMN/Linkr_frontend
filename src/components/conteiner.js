import styled from "styled-components";

const Conteiner = styled.div`
	width: 611+406+25;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	@media (max-width: 1000px) {
		width: 100vw;
	}
`;

export default Conteiner;
