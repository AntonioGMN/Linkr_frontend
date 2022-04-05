import styled from "styled-components";

const Snippet = styled.a`
	height: 155px;
	width: 503px;

	border: 1px solid #4d4d4d;
	border-radius: 11px;
	margin-top: 8px;
	display: flex;

	div {
		padding-left: 5px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		/* Fix the same width for all snippets */
		width: 348px;

		p {
			/* Treat snippet link overflow */
			overflow: hidden;
			text-overflow: ellipsis;
			max-width: 348px;
		}
	}

	p {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 19px;
		color: #cecece;

		:last-child {
			font-size: 11px;
			line-height: 13px;
		}
	}

	span {
		font-size: 11px;
		font-weight: 400;
		line-height: 13px;
		color: #9b9595;
		margin: 5px 0 13px 0;
	}

	img {
		width: 153.44px;
		height: 155px;

		border-radius: 0px 12px 13px 0px;
		object-fit: fill;
	}

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

export default Snippet;
