import "./NavbarToggle.css";
import { Link } from "react-router-dom";

export default function NavbarToggle() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
          <Link to="/mes-randos" className="navbar-item">
            Mes Randos
          </Link>
          <Link to="/vos-randos" className="navbar-item">
            Vos Randos
          </Link>
          <Link to="/connexion" className="navbar-item">
            Connexion
          </Link>
        </div>
      </div>
    </nav>
  );
}
