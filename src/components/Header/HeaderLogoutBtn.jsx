import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./theme-context";
import { AuthContext } from "./auth-context";

const HeaderLogoutBtn = () => {
  return (
    <AuthContext.Consumer>
      {({ handleAuthentication }) => (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <Link
              className={`menu-btn ${theme}`}
              onClick={handleAuthentication}
              to="/lock"
            >
              <span className="menu-btn-icon">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
            </Link>
          )}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};

export default HeaderLogoutBtn;
