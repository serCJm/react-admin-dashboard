import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../components/Header/auth-context";

class Signup extends Component {
  state = {};

  handleSubmit = (e, handleAuthentication) => {
    e.preventDefault();
    handleAuthentication();
    this.props.history.push("/");
  };

  render() {
    return (
      <AuthContext.Consumer>
        {({ handleAuthentication }) => (
          <div className="fc signup-container">
            <div className="login-form">
              <h1 className="fc m0 heading">Sign Up</h1>
              <div className="p2 fcc form__account">
                <form
                  className="fcc w100"
                  onSubmit={e => this.handleSubmit(e, handleAuthentication)}
                >
                  <div className="f mtb05 w100">
                    <span className="form__icon">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      name="user"
                      placeholder="Username"
                      className="p1 form__input"
                      autoComplete="off"
                    />
                  </div>
                  <div className="f mtb05 w100">
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
                  <div className="f mtb05 w100">
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
                    <button className="mtb1 btn btn--signup pntr">
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
              <div className="fcc social-login">
                <p>SIGN UP WITH</p>
                <div className="fsb w80">
                  <button className="p1 btn__signup btn__signup--facebook pntr">
                    <span className="mr05">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                    Facebook
                  </button>
                  <button className="p1 btn__signup btn__signup--twitter pntr">
                    <span className="mr05">
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                    Twitter
                  </button>
                </div>
                <p>
                  Already have an account?{" "}
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Signup;
