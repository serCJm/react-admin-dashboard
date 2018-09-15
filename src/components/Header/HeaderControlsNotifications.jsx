import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HeaderControlsNotifications = () => {
  return (
    <div className="header-controls-item">
      <span className="header-controls-icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </span>
      <span className="header-controls-icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </span>
      <span className="header-controls-icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </span>
    </div>
  );
};

export default HeaderControlsNotifications;
