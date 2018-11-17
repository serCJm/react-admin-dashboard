import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Inbox from "./Mailbox/Inbox/Inbox";
import Mail from "./Mailbox/Mail/Mail";
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
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/inbox" component={Inbox} />
        <Route exact path="/mail" component={Mail} />
      </main>
    );
  }
}

export default Pages;
