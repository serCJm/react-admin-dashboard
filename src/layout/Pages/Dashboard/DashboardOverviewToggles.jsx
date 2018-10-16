import React, { Component } from "react";
import ToggleMenu from "./ToggleMenu";

class DashboardOverviewToggles extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard-overview-toggles">
        <ToggleMenu />
        {/* {toggleItem} */}
      </div>
    );
  }
}

export default DashboardOverviewToggles;
