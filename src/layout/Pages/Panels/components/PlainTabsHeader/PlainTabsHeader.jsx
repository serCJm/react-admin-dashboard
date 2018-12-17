import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

const PlainTabsHeader = props => {
  return (
    <div className={`tabs ${props.styleClass}`}>
      <div className="p1 tabs__icon">
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className="p1 tabs__icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="p1 tabs__icon">
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  );
};

export default PlainTabsHeader;
