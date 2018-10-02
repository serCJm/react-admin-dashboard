import React, { Component } from "react";
import Header from "./layout/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./layout/Pages/Dashboard.jsx";

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
      <BrowserRouter>
        <React.Fragment>
          <Header
            sideMenu={this.state.sideMenu}
            toggleSideMenu={this.toggleSideMenu}
          />
          <main>
            <Route exact path="/" component={Dashboard} />
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
