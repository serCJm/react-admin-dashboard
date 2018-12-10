import React, { Component } from "react";
import Lock from "./layout/Pages/Lock";
import Login from "./layout/Pages/Login";
import Signup from "./layout/Pages/Signup";
import Main from "./Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route exact path="/lock" component={Lock} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/" component={Main} />
          </Switch>
        </React.Fragment>
      );
    } else {
      content = (
        <React.Fragment>
          <Switch>
            <Route exact path="/lock" component={Lock} />
            <Route path="/" component={Login} />
          </Switch>
        </React.Fragment>
      );
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
