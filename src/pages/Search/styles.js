import styled from "styled-components";

export const DebounceInputStyleHeader = {
	height: "45px",
	width: "563px",
	border: "none",
	borderRadius: "8px",
	color: "#C6C6C6",

	fontfamily: "Lato",
	fontsize: "17px",
	fontweight: "400",
	lineheight: "20px",
	padding: "16px",
};

export const SearchStyleHeader = styled.section`
	height: 45px;
	width: 563px;
	border: none;
	border-radius: ${(props) => (props.visibiliti ? "8px 8px 0 0" : "8px")};
	background: #e7e7e7;

	@media (max-width: 800px) {
		display: none;
	}
`;

export const DebounceInputStyleTimeline = {
	height: "45px",
	width: "100%",
	border: "none",
	borderRadius: "8px",
	color: "#C6C6C6",

	fontfamily: "Lato",
	fontsize: "17px",
	fontweight: "400",
	lineheight: "20px",
	padding: "16px",
};

export const SearchStyleTimeline = styled.section`
	display: none;
	height: 45px;
	border: none;
	border-radius: ${(props) => (props.visibiliti ? "8px 8px 0 0" : "8px")};
	background: #e7e7e7;

	@media (max-width: 800px) {
		display: block;
		min-width: 90vw;
		margin-top: 20px;
	}
`;

export const ShowUsersStyle = styled.section`
	display: ${(props) => (props.visibiliti ? "flex" : "none")};
	flex-direction: column;
	background: #e7e7e7;
	padding: 10px;
	border-radius: 0 0 8px 8px;

	button {
		width: 100%;
		display: flex;
		align-items: center;
		border: none;
		gap: 12px;
		background: #e7e7e7;
	}

	img {
		height: 39px;
		width: 39px;
		border-radius: 304px;
	}

	p {
		font-size: 19px;
		font-weight: 400;
		line-height: 23px;
		text-align: left;
	}
`;
