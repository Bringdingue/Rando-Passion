import "./Header.css";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo_rando.png";
import NavbarToggle from "../navbar/NavbarToggle";

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img className="header-background" src={logoImage} alt="Logo_rando" />
        </Link>
        <h1 className="title">Rando'Passion</h1>
        <NavbarToggle />
      </div>
    </header>
  );
}

export default Header;
