import React, { Component } from "react";
import SideMenuHomePages from "./SideMenuHomePages";

class SideMenuHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: "dashboard"
    };

    this.handleActivePage = this.handleActivePage.bind(this);
  }

  handleActivePage(pageId) {
    this.setState({ currentMenu: pageId });
  }
  render() {
    return (
      <div className="home">
        <input type="text" placeholder="Search" className="search" />
        <SideMenuHomePages
          handleActivePage={this.handleActivePage}
          currentMenu={this.state.currentMenu}
        />
      </div>
    );
  }
}

export default SideMenuHome;
