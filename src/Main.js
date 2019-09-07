import React, { Component } from "react";
import Header from "./layout/Header";
import Pages from "./layout/Pages/Pages";
import { ThemeContext, themes } from "./components/Header/theme-context";
import Spinner from "./components/UI/Spinner/Spinner";

class Main extends Component {
  handleThemeChange = themeID => {
    this.setState({ theme: themeID });
  };
  state = {
    sideMenu: false,
    theme: themes.default,
    handleThemeChange: this.handleThemeChange
  };

  toggleSideMenu = () => {
    this.setState(prevState => ({
      sideMenu: !prevState.sideMenu
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Header
          sideMenu={this.state.sideMenu}
          toggleSideMenu={this.toggleSideMenu}
        />
        <Pages sideMenu={this.state.sideMenu} />
      </ThemeContext.Provider>
    );
  }
}

export default Main;
