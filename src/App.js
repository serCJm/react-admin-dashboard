import React, { Component } from "react";
import Header from "./layout/Header";

class App extends Component {
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
      <Header
        sideMenu={this.state.sideMenu}
        toggleSideMenu={this.toggleSideMenu}
      />
    );
  }
}

export default App;
