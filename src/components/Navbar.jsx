import "../Styles/Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to={`/Home`}>
        <h1>Fabrik</h1>
      </Link>
      <div className="nav-links">
        <Link to={`/ChooseTheme`}>
          <button className="get-start-btn">Gat Started</button>
        </Link>
        <Link to={`/Prieing`}>
          <button className="prieing-btn">Prieing</button>
        </Link>
        <Link to={`/Login`}>
          <button className="login-btn">Login</button>
        </Link>
        <h4>Menu</h4>
      </div>
    </nav>
  );
}

export default Navbar;
