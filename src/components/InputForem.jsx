import { Link } from "react-router-dom";
import "../Styles/InputForem.css";

function InputForem() {
  return (
    <div className="contenrs">
      <div className="contenrs-text">
        <h1 className="contenrs-text-h1">Try Fabrik free</h1>
        <p>
          <i>
            Start your 14 day free trial with full customer support and no
            credit card required. Show us what you re made of.
          </i>
        </p>
        <Link to={`/ChooseTheme`}>
          <button className="button">Gat Started </button>
        </Link>
      </div>
    </div>
  );
}

export default InputForem;
