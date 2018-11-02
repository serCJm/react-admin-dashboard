import React, { Component } from "react";
import DashboardSummaryMenu from "./DashboardSummaryMenu";
import SalesComparison from "./SalesComparison/SalesComparison";

class DashboardSummary extends Component {
  state = {
    current: "sales-graph"
  };

  handleMenuClick = e => {
    this.setState({ current: e.currentTarget.id });
  };
  render() {
    let dashboardSummaryItem = <SalesComparison />;
    return (
      <div className="dashboard-summary">
        <DashboardSummaryMenu
          handleMenuClick={this.handleMenuClick}
          active={this.state.current}
        />
        {dashboardSummaryItem}
      </div>
    );
  }
}

export default DashboardSummary;
