import React, { Component } from "react";
import Avatar from "./Avatar";
import SideMenuOptions from "./SideMenuOptions";
import SideMenuHome from "./SideMenuHome";

class SideMenu extends Component {
  render() {
    return (
      <nav className="side-menu">
        <Avatar />
        <SideMenuOptions />
        <SideMenuHome />
      </nav>
    );
  }
}

export default SideMenu;
