import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import DashboardRadar from "./DashboardRadar/DashboardRadar";
import DashboardSummary from "./DashboardSummary/DashboardSummary";
import DashboardCalendarTime from "./DashboardCalendarTime/DashboardCalendarTime";

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
      <PageElementWrapper>
        <DashboardCalendarTime />
      </PageElementWrapper>
    </React.Fragment>
  );
};

export default Dashboard;
