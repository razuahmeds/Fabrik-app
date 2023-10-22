import { Link } from "react-router-dom";
import "../Styles/Login.css";

export const Login = () => {
  return (
    <div className="register">
      <div className="form-box">
        <form className="form">
          <span className="title">Login</span>

          <div className="form-container">
            <input type="text" className="input" placeholder="Full Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button>Login</button>
        </form>

        <div className="form-section">
          <p>
            Have an account?{" "}
            <Link to={`Register`}>
              {" "}
              <a href="">Sign up</a>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export const Register = () => {
  return (
    <div className="register">
      <div className="form-box">
        <form className="form">
          <span className="title">Sign in</span>

          <div className="form-container">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button>Sign in</button>
        </form>

        <div className="form-section">
          <p>
            Dont have an account? <a href="">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};
