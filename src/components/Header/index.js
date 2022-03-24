import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { StyledHeader, LogoutButton, LogoutContainer } from "./styles";
import ShowDropMenu from "../../assets/showDropMenu.svg";
import HideDropMenu from "../../assets/hideDropMenu.svg";

export default function Header() {
  const navigate = useNavigate();

  const [dropMenu, setDropMenu] = useState(false);

  return (
    <StyledHeader>
      <h1>linkr</h1>
      <div>
        {dropMenu ? (
          <img
            className="icon"
            src={HideDropMenu}
            alt="Hide drop menu"
            onClick={() => setDropMenu(false)}
          />
        ) : (
          <img
            className="icon"
            src={ShowDropMenu}
            alt="Hide drop menu"
            onClick={() => setDropMenu(true)}
          />
        )}
        <img
          src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046"
          alt="person"
          onClick={() => (dropMenu ? setDropMenu(false) : setDropMenu(true))}
        />
      </div>

      {dropMenu && (
        <LogoutContainer onClick={() => setDropMenu(false)}>
          <LogoutButton onClick={() => navigate("/")}>Logout</LogoutButton>
        </LogoutContainer>
      )}
    </StyledHeader>
  );
}
