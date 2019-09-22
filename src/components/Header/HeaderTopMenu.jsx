import React from "react";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import HeaderControls from "./HeaderControls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain } from "@fortawesome/free-solid-svg-icons";

const HeaderTopMenu = props => {
  let sideMenuClass = props.sideMenu ? " sidemenu-open" : "";

  return (
    <div className={`header-top-menu${sideMenuClass}`}>
      {props.headerMenuBtn}
      <div className="logo">
        <h1>
          <FontAwesomeIcon icon={faTrain} transform="left-8" />
          {props.logo}
        </h1>
        <HeaderControls />
      </div>
      <HeaderLogoutBtn />
    </div>
  );
};

export default HeaderTopMenu;
