import React, { Component } from "react";
import DashboardSummaryMenu from "./DashboardSummaryMenu";
//import SalesComparisonGraph from "../../../../components/graphs/SalesComparisonGraph";

class DashboardSummary extends Component {
  state = {};
  render() {
    //let dashboardSummaryItem = <SalesComparisonGraph />;
    return (
      <div className="dashboard-summary">
        <DashboardSummaryMenu />
        {/* {dashboardSummaryItem} */}
      </div>
    );
  }
}

export default DashboardSummary;
