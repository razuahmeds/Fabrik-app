import { Link } from "react-router-dom";
import "../Styles/Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-info">
        <h1>Beautiful portfolio websites in minutes.</h1>
        <p>
          Join the s leading filmmakers, artists, Photographers and designers.
          Build yours now.
        </p>
        <Link to={`/ChooseTheme`}>
          <button className="get-start-btn ">Gat Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
