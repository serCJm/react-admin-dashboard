import React, { Component } from "react";
import Header from "./layout/Header";
import Pages from "./layout/Pages/Pages";
import Lock from "./layout/Pages/Lock";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthContext } from "./components/Header/auth-context";

class App extends Component {
  handleAuthentication = () => {
    this.setState(prevState => ({ authenticated: !prevState.authenticated }));
  };
  state = {
    sideMenu: false,
    authenticated: true,
    handleAuthentication: this.handleAuthentication
  };

  toggleSideMenu = () => {
    this.setState(prevState => ({
      sideMenu: !prevState.sideMenu
    }));
  };

  render() {
    let content = null;
    if (this.state.authenticated) {
      content = (
        <React.Fragment>
          <Header
            sideMenu={this.state.sideMenu}
            toggleSideMenu={this.toggleSideMenu}
          />
          <Pages sideMenu={this.state.sideMenu} />
        </React.Fragment>
      );
    } else {
      content = <Route path="/lock" component={Lock} />;
    }
    return (
      <BrowserRouter>
        <AuthContext.Provider value={this.state}>
          {content}
        </AuthContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
