import React, { Component } from "react";
import Header from "./layout/Header";
import Pages from "./layout/Pages/Pages";
import { ThemeContext, themes } from "./components/Header/theme-context";
import { Route, Switch } from "react-router-dom";
import Lock from "./layout/Pages/Lock";

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
      <Switch>
        <Route exact path="/lock" component={Lock} />
        <ThemeContext.Provider value={this.state}>
          <Header
            sideMenu={this.state.sideMenu}
            toggleSideMenu={this.toggleSideMenu}
          />
          <Pages sideMenu={this.state.sideMenu} />
        </ThemeContext.Provider>
      </Switch>
    );
  }
}

export default Main;
