import Logo from "../assets/chat.svg";
import { NavBar, NavLogo } from "../styles/NavBar";
const Header = () => {
  return (
    <NavBar>
      <NavLogo src={Logo} alt="Logo chat" />
    </NavBar>
  );
};

export default Header;
