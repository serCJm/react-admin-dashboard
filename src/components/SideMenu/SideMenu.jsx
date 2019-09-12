import React, { Component, Suspense } from "react";
import Avatar from "../Avatar";
import SideMenuOptions from "./SideMenuOptions";
import SideMenuHome from "./SideMenuHome";
import Spinner from "../UI/Spinner/Spinner";
// import SideMenuUsers from "./SideMenuUsers";
// import SideMenuGraphs from "./SideMenuGraphs";
// import SideMenuHistory from "./SideMenuHistory";
// import SideMenuNotifications from "./SideMenuNotifications";

const SideMenuUsers = React.lazy(() => import("./SideMenuUsers"));
const SideMenuGraphs = React.lazy(() => import("./SideMenuGraphs"));
const SideMenuHistory = React.lazy(() => import("./SideMenuHistory"));
const SideMenuNotifications = React.lazy(() =>
  import("./SideMenuNotifications")
);

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOption: "home",
      showCurrent: "home"
    };
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOptionClick(optionId) {
    this.setState({ showCurrent: optionId });
    setTimeout(
      function() {
        this.setState({ currentOption: optionId });
      }.bind(this),
      500
    );
  }

  render() {
    let currentTab;
    if (this.state.currentOption === "home") {
      currentTab = <SideMenuHome id="home" current={this.state.showCurrent} />;
    } else if (this.state.currentOption === "comments") {
      currentTab = (
        <SideMenuUsers id="comments" current={this.state.showCurrent} />
      );
    } else if (this.state.currentOption === "chartbar") {
      currentTab = (
        <SideMenuGraphs id="chartbar" current={this.state.showCurrent} />
      );
    } else if (this.state.currentOption === "history") {
      currentTab = (
        <SideMenuHistory id="history" current={this.state.showCurrent} />
      );
    } else if (this.state.currentOption === "exclamation") {
      currentTab = (
        <SideMenuNotifications
          id="exclamation"
          current={this.state.showCurrent}
        />
      );
    }

    let sideMenuClass;
    if (this.props.mobile) {
      sideMenuClass = this.props.sideMenu ? " open" : "";
    } else {
      sideMenuClass = " open";
    }
    return (
      <nav className={`side-menu${sideMenuClass}`}>
        <Avatar />
        <SideMenuOptions
          currentOption={this.state.currentOption}
          handleOptionClick={this.handleOptionClick}
        />
        <Suspense fallback={<Spinner></Spinner>}>{currentTab}</Suspense>
      </nav>
    );
  }
}

export default SideMenu;
