/*

* GAMEPAD

* Header Component

*/

//! Style import
import "../styles/header.css";

//! Libraries import

//! Hooks import
import { Link, useNavigate } from "react-router-dom";

//! Contexts

//! Images
import logo from "../assets/gaming-logo.png";

//* HEADER FUNCTION
function Header() {
  //
  // Def navigate
  const navigate = useNavigate();

  // Return
  return (
    <header className="container">
      <Link to="/">
        <div className="header-left-bloc">
          <img className="header-logo" src={logo} alt="Gamepad logo" />
          <h2>Gamepad</h2>
        </div>
      </Link>

      <div className="header-right-bloc">
        <Link to="/mycollection">
          <p>My collection</p>
        </Link>
        <button className="header-button">Login</button>
      </div>
    </header>
  );
}

export default Header;
