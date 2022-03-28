import styled from "styled-components";

const MainStyle = styled.main`
	width: 100%;

	display: flex;
	gap: 25px;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 600px) {
		gap: 16px;
	}
`;

export { MainStyle, Column };
