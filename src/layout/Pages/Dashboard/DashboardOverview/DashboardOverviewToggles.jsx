import React, { Component } from "react";
import ToggleMenu from "./ToggleMenu";
import VisitorsChart from "./VisitorsChart";
import SocialToggles from "./SocialToggles";
import Note from "./Note";

class DashboardOverviewToggles extends Component {
  state = {
    active: "demographics"
  };

  handleActive = e => {
    e.preventDefault();
    this.setState({ active: e.currentTarget.id });
  };
  render() {
    let toggleItem = null;
    if (this.state.active === "demographics") {
      toggleItem = <VisitorsChart />;
    } else if (this.state.active === "social") {
      toggleItem = <SocialToggles />;
    } else {
      toggleItem = <Note />;
    }
    return (
      <div className="dashboard-overview-toggles">
        <ToggleMenu
          handleActive={this.handleActive}
          active={this.state.active}
        />
        {toggleItem}
      </div>
    );
  }
}

export default DashboardOverviewToggles;
