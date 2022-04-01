import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 22px;
  width: 100vw;
  height: 72px;
  background-color: #151515;

  h1 {
    font-family: Passion One;
    font-weight: bold;
    font-size: 49px;
    color: white;

    cursor: pointer;
  }

  img {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    object-fit: cover;
  }

  .icon {
    width: 28px;
    height: 17px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 17px;
  }
`;

const LogoutButton = styled.button`
	all: unset;
	box-sizing: border-box;

  position: fixed;
  top: 72px;
  right: 0;
  z-index: 13;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 135px;
	height: 47px;
	border-radius: 0 0 0 20px;
	background-color: #171717;

	font-weight: bold;
	font-size: 17px;
	color: white;

	cursor: pointer;
`;

const LogoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;

	width: 100%;
	height: 100%;
`;

export { StyledHeader, LogoutButton, LogoutContainer };
