import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import DashboardRadar from "./DashboardRadar/DashboardRadar";

const Dashboard = () => {
  return (
    <React.Fragment>
      <PageElementWrapper>
        <DashboardOverview />
      </PageElementWrapper>
      <PageElementWrapper>
        <DashboardRadar />
      </PageElementWrapper>
    </React.Fragment>
  );
};

export default Dashboard;
