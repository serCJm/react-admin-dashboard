import React from "react";
import HeaderTopMenu from "../components/Header/HeaderTopMenu";
import SideMenu from "../components/SideMenu/SideMenu";
import HeaderMenuBtn from "../components/Header/HeaderMenuBtn";

const Header = props => {
  return (
    <header>
      <HeaderTopMenu
        logo="Logo"
        headerMenuBtn={<HeaderMenuBtn onClick={props.toggleSideMenu} />}
        sideMenu={props.sideMenu}
      />
      <SideMenu sideMenu={props.sideMenu} />
    </header>
  );
};

export default Header;
