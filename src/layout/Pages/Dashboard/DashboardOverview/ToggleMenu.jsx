import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const content = [
  { id: "demographics", icon: <FontAwesomeIcon icon={faSignal} /> },
  { id: "social", icon: <FontAwesomeIcon icon={faToggleOff} /> },
  { id: "note", icon: <FontAwesomeIcon icon={faSave} /> }
];

const ToggleMenu = props => {
  return (
    <div className="toggle-menu">
      {content.map(item => (
        <button
          key={item.id}
          id={item.id}
          className={
            props.active === item.id
              ? "toggle-menu-btn active"
              : "toggle-menu-btn"
          }
          onClick={props.handleActive}
          areaLabel={item.id}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default ToggleMenu;
