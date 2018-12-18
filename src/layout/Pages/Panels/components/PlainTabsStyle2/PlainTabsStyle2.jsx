import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

const contents = [
  { icon: faHome, id: "home" },
  { icon: faUser, id: "user" },
  { icon: faCog, id: "cog" }
];

const PlainTabsStyle2 = props => {
  return (
    <div className={`tabs tabs--style2 ${props.styleClass}`}>
      {contents.map(item => (
        <div
          key={item.id}
          className={
            props.active === item.id ? `p1 tabs__icon active` : "p1 tabs__icon"
          }
          onClick={e => props.handleSwitchActive(item.id, e)}
        >
          <FontAwesomeIcon icon={item.icon} />
        </div>
      ))}
    </div>
  );
};

export default PlainTabsStyle2;
