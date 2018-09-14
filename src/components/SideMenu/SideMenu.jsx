import React, { Component } from "react";
import Avatar from "../Avatar";
import SideMenuOptions from "./SideMenuOptions";
import SideMenuHome from "./SideMenuHome";
import SideMenuUsers from "./SideMenuUsers";
import SideMenuGraphs from "./SideMenuGraphs";
import SideMenuHistory from "./SideMenuHistory";
import SideMenuNotifications from "./SideMenuNotifications";

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOption: "home",
      showCurrent: "home"
    };
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOptionClick(optionId) {
    this.setState({ showCurrent: optionId });
    setTimeout(
      function() {
        this.setState({ currentOption: optionId });
      }.bind(this),
      500
    );
  }

  render() {
    let currentTab;
    if (this.state.currentOption === "home") {
      currentTab = <SideMenuHome id="home" current={this.state.showCurrent} />;
    } else if (this.state.currentOption === "comments") {
      currentTab = (
        <SideMenuUsers id="comments" current={this.state.showCurrent} />
      );
    } else if (this.state.currentOption === "chartbar") {
      currentTab = (
        <SideMenuGraphs id="chartbar" current={this.state.showCurrent} />
      );
    } else if (this.state.currentOption === "history") {
      currentTab = (
        <SideMenuHistory id="history" current={this.state.showCurrent} />
      );
    } else if (this.state.currentOption === "exclamation") {
      currentTab = (
        <SideMenuNotifications
          id="exclamation"
          current={this.state.showCurrent}
        />
      );
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
