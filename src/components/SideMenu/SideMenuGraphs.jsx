import React, { Component } from "react";
import SideMenuGraphPolar from "./SideMenuGraphPolar";
import SideMenuGraphArea from "./SideMenuGraphArea";
import SideMenuGraphStock from "./SideMenuGraphStock";
import SideMenuGraphMarket from "./SideMenuGraphMarket";
import SideMenuGraphCompare from "./SideMenuGraphCompare";

class SideMenuGraphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exitAnimation: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //check for the mounted props
    if (nextProps.current !== nextProps.id) {
      const { exitAnimation } = { ...prevState };
      return { exitAnimation: !exitAnimation };
    } else {
      return null;
    }
  }

  render() {
    return (
      <div
        className={
          this.state.exitAnimation
            ? "home graphs animate-close"
            : "home graphs animate-open"
        }
      >
        <h1 className="title">Statistics</h1>
        <SideMenuGraphPolar />
        <hr className="home-hr" />
        <SideMenuGraphArea />
        <SideMenuGraphStock />
        <hr className="home-hr" />
        <SideMenuGraphMarket />
        <hr className="home-hr" />
        <SideMenuGraphCompare />
      </div>
    );
  }
}

export default SideMenuGraphs;
