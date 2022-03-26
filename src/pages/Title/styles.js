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

	position: static;
	top: 125px;
	z-index: 2;

	@media (max-width: 1000px) {
		font-size: 33px;
		margin-left: 17px;
	}
`;

export default TitleStyle;
