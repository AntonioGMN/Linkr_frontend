import styled from "styled-components";

const NewPostsBarStyle = styled.section`
	height: 61px;
	background: #1877f2;
	border-radius: 16px;
	box-shadow: 0px 4px 4px 0px #00000040;

	display: ${(props) => (props.show ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	cursor: pointer;

	p {
		font-size: 16px;
		font-weight: 400;
		line-height: 19px;
		letter-spacing: 0em;
		text-align: center;
		color: #ffffff;
	}
`;

export default NewPostsBarStyle;
