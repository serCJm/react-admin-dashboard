import React, { Component } from "react";
import HeaderTopMenu from "../components/HeaderTopMenu";
import SideMenu from "../components/SideMenu";

class Header extends Component {
  render() {
    return (
      <header>
        <HeaderTopMenu logo="Logo" />
        <SideMenu />
      </header>
    );
  }
}

export default Header;
