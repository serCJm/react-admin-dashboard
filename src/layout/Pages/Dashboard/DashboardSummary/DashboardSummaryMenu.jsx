import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

const DashboardSummaryMenu = () => {
  return (
    <div className="dashboard-summary-menu">
      <button className="dashboard-summary-menu-icon">
        <FontAwesomeIcon icon={faChartBar} />
      </button>
      <button className="dashboard-summary-menu-icon">
        <FontAwesomeIcon icon={faUserAlt} />
      </button>
      <button className="dashboard-summary-menu-icon">
        <FontAwesomeIcon icon={faChartPie} />
      </button>
    </div>
  );
};

export default DashboardSummaryMenu;
