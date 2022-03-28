import styled from "styled-components";

const TitleStyle = styled.h1`
	height: 64px;
	width: 100%;

	font-family: Oswald;
	font-size: 43px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
	color: #ffffff;

	margin: 53px 0 43px 0;

	@media (max-width: 800px) {
		max-width: 100%;
		font-size: 33px;
		padding-left: 17px;

		margin: 0;
	}
`;

export default TitleStyle;
