import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import DashboardRadar from "./DashboardRadar/DashboardRadar";
import DashboardSummary from "./DashboardSummary/DashboardSummary";
import DashboardCalendarTime from "./DashboardCalendarTime/DashboardCalendarTime";
//import Navigation from "./Navigation/Navigation";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <PageElementWrapper classId="dashboard-overview">
        <DashboardOverview />
      </PageElementWrapper>
      <PageElementWrapper classId="dashboard-radar">
        <DashboardRadar />
      </PageElementWrapper>
      <PageElementWrapper classId="dashboard-summary">
        <DashboardSummary />
      </PageElementWrapper>
      <PageElementWrapper classId="calendar-time">
        <DashboardCalendarTime />
      </PageElementWrapper>
      {/* <PageElementWrapper classId="navigation">
        <Navigation />
      </PageElementWrapper> */}
    </div>
  );
};

export default Dashboard;
