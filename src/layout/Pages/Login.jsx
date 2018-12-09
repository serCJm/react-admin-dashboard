import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="fc login-container">
      <div className="login-form">
        <h1 className="fc m0 heading">Sign in to Dashboard</h1>
        <div>
          <p>You need to sign in to see the dashboard.</p>
          <button>
            <FontAwesomeIcon icon={faFacebookF} />
            Sign in with Facebook
          </button>
          <button>
            <FontAwesomeIcon icon={faTwitter} /> or with twitter
          </button>
        </div>
        <div>
          <p>or use your account</p>
          <form>
            <input type="email" name="email" />
            <input type="password" name="password" />
            <fieldset>
              <legend hidden />
              <Link to="/signup">Create a dashboard account</Link>
              <button>Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
