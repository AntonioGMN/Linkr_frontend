import styled from "styled-components";

const authContainer = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export default authContainer;
