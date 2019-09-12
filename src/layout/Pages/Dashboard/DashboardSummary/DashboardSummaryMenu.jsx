import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

const DashboardSummaryMenu = ({ handleMenuClick, active }) => {
  const buttonClass = "dashboard-summary-menu-icon";
  return (
    <div className="dashboard-summary-menu">
      <button
        id="sales-graph"
        className={
          active === "sales-graph" ? buttonClass + " active" : buttonClass
        }
        onClick={handleMenuClick}
        area-label="sales-graph"
      >
        <FontAwesomeIcon icon={faChartBar} />
      </button>
      <button
        id="friends"
        className={active === "friends" ? buttonClass + " active" : buttonClass}
        onClick={handleMenuClick}
        area-label="friends"
      >
        <FontAwesomeIcon icon={faUserAlt} />
      </button>
      <button
        id="tickets"
        className={active === "tickets" ? buttonClass + " active" : buttonClass}
        onClick={handleMenuClick}
        area-label="tickets"
      >
        <FontAwesomeIcon icon={faChartPie} />
      </button>
    </div>
  );
};

export default DashboardSummaryMenu;
