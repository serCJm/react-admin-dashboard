import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

const HeaderControlsNotifications = () => {
  return (
    <div className="header-controls-item">
      <span className="header-controls-icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </span>
      <span className="header-controls-icon">
        <FontAwesomeIcon icon={faBell} />
        <div className="bubble1">3</div>
      </span>
      <span className="header-controls-icon">
        <FontAwesomeIcon icon={faRss} />
        <div className="bubble2">4</div>
      </span>
    </div>
  );
};

export default HeaderControlsNotifications;
