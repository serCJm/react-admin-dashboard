import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./theme-context";

const HeaderLogoutBtn = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button className={`menu-btn ${theme}`}>
          <span className="menu-btn-icon">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </span>
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default HeaderLogoutBtn;
