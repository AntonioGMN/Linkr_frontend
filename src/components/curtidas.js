import styled from "styled-components";

const Curtidas = styled.div`
	width: 50px;

	display: flex;
	flex-direction: column;

	span {
		font-size: 11px;
		font-weight: 400;
		line-height: 13px;
		letter-spacing: 0em;
		text-align: center;
		color: #ffffff;
	}

	@media (max-width: 800px) {
		width: 40px;

		span {
			font-size: 9px;
			line-height: 11px;
		}
	}
`;

export default Curtidas;
