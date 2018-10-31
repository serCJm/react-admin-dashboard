import React from "react";
import DashboardRadarGraph from "./DashboardRadarGraph";
import DashboardRadarTable from "./DashboardRadarTable";
const DashboardRadar = () => {
  return (
    <div className="dashboard-radar">
      <DashboardRadarGraph />
      <DashboardRadarTable />
    </div>
  );
};

export default DashboardRadar;
