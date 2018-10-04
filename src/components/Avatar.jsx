import React from "react";
import imageAvatar from "../images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./Header/theme-context";
import { AuthContext } from "./Header/auth-context";
import { Link } from "react-router-dom";

function Avatar() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={`avatar ${theme}`}>
          <img
            className="avatar-img"
            src={imageAvatar}
            style={{ width: 50, height: 50 }}
            alt="admin"
          />
          <div className="avatar-info">
            <h2 className="avatar-name">CJ Moro</h2>
            <div className={`avatar-progress-bar field ${theme}`}>
              <div className="avatar-progress-bar fill" />
            </div>
          </div>
          <AuthContext.Consumer>
            {({ handleAuthentication }) => (
              <Link to="/lock" onClick={handleAuthentication}>
                <span className={`avatar-lock ${theme}`}>
                  <FontAwesomeIcon icon={faCoffee} />
                </span>
              </Link>
            )}
          </AuthContext.Consumer>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Avatar;
