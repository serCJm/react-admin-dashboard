import React, { Component } from "react";
import Header from "./layout/Header";
import Pages from "./layout/Pages/Pages";

class Main extends Component {
  state = {
    sideMenu: false
  };

  toggleSideMenu = () => {
    this.setState(prevState => ({
      sideMenu: !prevState.sideMenu
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Header
          sideMenu={this.state.sideMenu}
          toggleSideMenu={this.toggleSideMenu}
        />
        <Pages sideMenu={this.state.sideMenu} />
      </React.Fragment>
    );
  }
}

export default Main;
