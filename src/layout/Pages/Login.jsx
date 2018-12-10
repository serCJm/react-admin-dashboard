import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="fc login-container">
      <div className="login-form">
        <h1 className="fc m0 heading">Sign in to Dashboard</h1>
        <div className="fcc social-login">
          <p>You need to sign in to see the dashboard.</p>
          <button className="p1 fsa btn--facebook pntr">
            <span className="mr1">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            Sign in with Facebook
          </button>
          <button className="mtb1 p1 btn--twitter pntr">
            <span className="mr05">
              <FontAwesomeIcon icon={faTwitter} />
            </span>{" "}
            or with twitter
          </button>
        </div>
        <div className="p2 fcc form__account">
          <p className="mt0">or use your account</p>
          <form className="fcc w100">
            <div className="f mtb1 w100">
              <span className="form__icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="loginemail@loginemail.com"
                className="p1 form__input"
                autoComplete="on"
              />
            </div>
            <div className="f mtb1 w100">
              <span className="form__icon">
                <FontAwesomeIcon icon={faKey} />
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p1 form__input"
                autoComplete="on"
              />
            </div>
            <div className="fsb form__actions">
              <Link to="/signup" className="link">
                Create a dashboard account
              </Link>
              <button className="btn--login pntr">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
