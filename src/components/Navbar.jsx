import logo from "../assets/logo/logo.png";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
      <div className="navbarLogo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      </NavLink>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;