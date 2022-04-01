import styled from "styled-components";

import Button from "../../button";

export const ModalText = styled.p`
	font-weight: 700;
	font-size: 34px;
	color: #ffffff;
	text-align: center;
`;

export const ModalButtonsDiv = styled.div`
	display: flex;
	gap: 27px;

	margin-top: 39px;
`;

export const ModalButton = styled(Button)`
	width: 134px;
	height: 37px;
	background-color: ${({ cancel }) => cancel ? 'white' : '#1877f2'};

	font-size: 18px;
	color: ${({ cancel }) => cancel ? '#1877f2' : 'white'};
`;
