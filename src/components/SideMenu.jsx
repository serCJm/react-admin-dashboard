import React, { Component } from "react";
import Avatar from "./Avatar";
import SideMenuOptions from "./SideMenuOptions";
import SideMenuHome from "./SideMenuHome";
import SideMenuUsers from "./SideMenuUsers";

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
    let currentTab;
    if (this.state.currentOption === "home") {
      currentTab = <SideMenuHome />;
    } else if (this.state.currentOption === "comments") {
      currentTab = <SideMenuUsers />;
    }

    return (
      <nav className="side-menu">
        <Avatar />
        <SideMenuOptions
          currentOption={this.state.currentOption}
          handleOptionClick={this.handleOptionClick}
        />
        {currentTab}
      </nav>
    );
  }
}

export default SideMenu;
