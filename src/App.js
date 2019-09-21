import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContext } from "./components/Header/auth-context";
import Spinner from "./components/UI/Spinner/Spinner";
import Main from "./Main";

const Lock = React.lazy(() => import("./layout/Pages/Lock"));
const Login = React.lazy(() => import("./layout/Pages/Login"));
const Signup = React.lazy(() => import("./layout/Pages/Signup"));

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
      content = <Main></Main>;
    } else {
      content = (
        <React.Fragment>
          <Switch>
            <Route exact path="/lock" component={Lock} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/" component={Login} />
          </Switch>
        </React.Fragment>
      );
    }
    return (
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <AuthContext.Provider value={this.state}>
            {content}
          </AuthContext.Provider>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
