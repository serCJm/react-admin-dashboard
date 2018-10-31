import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import DashboardRadar from "./DashboardRadar/DashboardRadar";
import DashboardSummary from "./DashboardSummary/DashboardSummary";

const Dashboard = () => {
  return (
    <React.Fragment>
      <PageElementWrapper>
        <DashboardOverview />
      </PageElementWrapper>
      <PageElementWrapper>
        <DashboardRadar />
      </PageElementWrapper>
      <PageElementWrapper>
        <DashboardSummary />
      </PageElementWrapper>
    </React.Fragment>
  );
};

export default Dashboard;
