import React, { Component } from "react";
import Header from "./layout/Header";
import Dashboard from "./layout/Pages/Dashboard.jsx";
import Logout from "./layout/Pages/Logout.jsx";
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
          <main>
            <Route exact path="/" component={Dashboard} />
          </main>
        </React.Fragment>
      );
    } else {
      content = <Route path="/logout" component={Logout} />;
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
