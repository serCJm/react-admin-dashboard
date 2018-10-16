import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const ToggleMenu = () => {
  return (
    <div className="toggle-menu">
      <button className="toggle-menu-btn active">
        <FontAwesomeIcon icon={faSignal} />
      </button>
      <button className="toggle-menu-btn">
        <FontAwesomeIcon icon={faToggleOff} />
      </button>
      <button className="toggle-menu-btn">
        <FontAwesomeIcon icon={faSave} />
      </button>
    </div>
  );
};

export default ToggleMenu;
