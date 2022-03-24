import { StyledHeader, LogoutButton } from "./styles";
import HideDropMenu from "../../assets/hideDropMenu.svg";

export default function Header() {
  return (
    <StyledHeader>
      <h1>linkr</h1>
      <div>
        <img className="icon" src={HideDropMenu} alt="Hide drop menu" />
        <img
          src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046"
          alt="person"
        />
      </div>

      <LogoutButton>Logout</LogoutButton>
    </StyledHeader>
  );
}
