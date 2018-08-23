import React, { Component } from "react";
import Avatar from "./Avatar";
import SideMenuOptions from "./SideMenuOptions";
import SideMenuHome from "./SideMenuHome";

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOption: "home"
    };
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOptionClick(optionId) {
    this.setState({ currentOption: optionId });
  }
  render() {
    return (
      <nav className="side-menu">
        <Avatar />
        <SideMenuOptions
          currentOption={this.state.currentOption}
          handleOptionClick={this.handleOptionClick}
        />
        <SideMenuHome />
      </nav>
    );
  }
}

export default SideMenu;
