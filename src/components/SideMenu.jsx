import React, { Component } from "react";
import Avatar from "./Avatar";
import SideMenuOptions from "./SideMenuOptions";

class SideMenu extends Component {
  render() {
    return (
      <nav className="side-menu">
        <Avatar />
        <SideMenuOptions />
      </nav>
    );
  }
}

export default SideMenu;
