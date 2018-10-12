import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard";
import { Route } from "react-router-dom";

class Pages extends Component {
  state = {
    mobile: window.matchMedia("(max-width: 800px)").matches
  };

  hangleScreenResize = () => {
    const mq = window.matchMedia("(max-width: 800px)").matches;
    this.setState({ mobile: mq });
  };

  componentDidMount() {
    window.addEventListener("resize", this.hangleScreenResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.hangleScreenResize);
  }

  render() {
    const { sideMenu } = this.props;
    let mainClass = "pages sidemenu-open";
    if (!sideMenu && window.matchMedia("(max-width: 800px)").matches) {
      mainClass = "pages";
    }
    return (
      <main className={mainClass}>
        <div className="dashboard">
          <Route exact path="/" component={Dashboard} />
        </div>
      </main>
    );
  }
}

export default Pages;
