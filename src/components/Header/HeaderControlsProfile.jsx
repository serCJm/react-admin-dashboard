import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

const HeaderControlsProfile = () => {
  return (
    <div className="header-controls-item">
      <span className="header-controls-icon">
        <FontAwesomeIcon icon={faUser} />
      </span>
      <span className="header-controls-icon">
        <FontAwesomeIcon icon={faCogs} />
      </span>
    </div>
  );
};

export default HeaderControlsProfile;
