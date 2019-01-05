import React from "react";
import DashboardRadarGraph from "./DashboardRadarGraph";
import DashboardRadarTable from "./DashboardRadarTable";
import ContainerDimensions from "react-container-dimensions";
const DashboardRadar = () => {
  return (
    <div className="dashboard-radar">
      <ContainerDimensions>
        {({ width }) => <DashboardRadarGraph width={width - 150} />}
      </ContainerDimensions>

      <DashboardRadarTable />
    </div>
  );
};

export default DashboardRadar;
