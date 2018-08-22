import React, { Component } from "react";
import SideMenuHomePages from "./SideMenuHomePages";
import SideMenuHomeComponents from "./SideMenuHomeComponents";
import SideMenuHomeExtras from "./SideMenuHomeExtras";
import SideMenuHomeDocs from "./SideMenuHomeDocs";

class SideMenuHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: "dashboard",
      searchString: null
    };

    this.handleActivePage = this.handleActivePage.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleActivePage(pageId) {
    this.setState({ currentMenu: pageId });
  }

  handleSearchChange(e) {
    this.setState({ searchString: e.target.value });
  }
  render() {
    return (
      <div className="home">
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={this.handleSearchChange}
        />

        <SideMenuHomePages
          handleActivePage={this.handleActivePage}
          currentMenu={this.state.currentMenu}
          search={this.state.searchString}
        />
        <hr className="home-hr" />
        <SideMenuHomeComponents
          handleActivePage={this.handleActivePage}
          currentMenu={this.state.currentMenu}
        />
        <hr className="home-hr" />
        <SideMenuHomeExtras
          handleActivePage={this.handleActivePage}
          currentMenu={this.state.currentMenu}
        />
        <hr className="home-hr" />
        <SideMenuHomeDocs
          handleActivePage={this.handleActivePage}
          currentMenu={this.state.currentMenu}
        />
      </div>
    );
  }
}

export default SideMenuHome;
