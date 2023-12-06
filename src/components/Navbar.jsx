import "../Styles/Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to={`/`}>
        <img
          className="logo-img"
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
          alt=""
        />
      </Link>
      <div className="nav-links">
        <Link to={`/prieing`}>
          <button className="prieing-btn">Prieing</button>
        </Link>
        <Link to={`/chooseTheme`}>
          <button className="men-button">Menu</button>
        </Link>
        <Link to={`/login`}>
          <button className="login-button">Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
