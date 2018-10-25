import React from "react";
import RevenueInfo from "./RevenueInfo";
import RevenueGraph from "./RevenueGraph";

const DashboardOverviewRevenue = () => {
  return (
    <div className="dashboard-overview-revenue">
      <RevenueInfo />
      <div className="revenue-graph-container">
        <RevenueGraph />
      </div>
    </div>
  );
};

export default DashboardOverviewRevenue;
