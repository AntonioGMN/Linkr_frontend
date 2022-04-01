import styled from "styled-components";

const StyledAction = styled.div`
	width: 50px;

	display: flex;
	flex-direction: column;

	.icon {
		align-self: center;
	}

	span {
		align-self: center;

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

export default StyledAction;
