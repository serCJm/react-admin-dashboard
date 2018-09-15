import React from "react";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain } from "@fortawesome/free-solid-svg-icons";

const HeaderTopMenu = props => {
  let sideMenuClass;
  if (props.mobile) {
    sideMenuClass = props.sideMenu ? " sidemenu-open" : "";
  } else {
    sideMenuClass = " sidemenu-open";
  }
  return (
    <div className={`header-top-menu${sideMenuClass}`}>
      {props.headerMenuBtn}
      <h1 className="logo">
        <FontAwesomeIcon icon={faTrain} transform="left-8" />
        {props.logo}
      </h1>
      <HeaderLogoutBtn />
    </div>
  );
};

export default HeaderTopMenu;
