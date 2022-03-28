import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { StyledHeader, LogoutButton, LogoutContainer } from "./styles";
import ShowDropMenu from "../../assets/showDropMenu.svg";
import HideDropMenu from "../../assets/hideDropMenu.svg";

export default function Header() {
  const navigate = useNavigate();

  const { auth, removeLogged } = useAuth();

  const [dropMenu, setDropMenu] = useState(false);

  async function logout() {
    try {
      await api.logout(auth.token);
      removeLogged();
      navigate("/");
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <StyledHeader>
      <h1 onClick={() => navigate("/timeline")}>linkr</h1>
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
          src={auth.userPicture}
          alt="person"
          onClick={() => (dropMenu ? setDropMenu(false) : setDropMenu(true))}
        />
      </div>

      {dropMenu && (
        <LogoutContainer onClick={() => setDropMenu(false)}>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </LogoutContainer>
      )}
    </StyledHeader>
  );
}
