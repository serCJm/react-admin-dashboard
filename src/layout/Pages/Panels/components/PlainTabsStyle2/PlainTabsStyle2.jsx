import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faBars,
  faFolder,
  faFolderOpen
} from "@fortawesome/free-solid-svg-icons";

const contents1 = [
  { icon: faHome, id: "home" },
  { icon: faUser, id: "user" },
  { icon: faCog, id: "cog" }
];

const contents2 = [
  { icon: faBars, id: "home (footer)" },
  { icon: faFolderOpen, id: "user (footer)" },
  { icon: faFolder, id: "cog (footer)" }
];

const PlainTabsStyle2 = props => {
  let contents = contents1;
  if (props.iconSet2) {
    contents = contents2;
  }
  let gridClass = `tabs tabs--style2 ${props.styleClass}`;
  if (props.tabAlt) {
    gridClass = `tabs tabs--alt tabs--style2 ${props.styleClass}`;
  }
  return (
    <div className={gridClass}>
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
