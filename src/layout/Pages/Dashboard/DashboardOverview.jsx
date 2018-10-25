import React, { Component } from "react";
import ContainerDimensions from "react-container-dimensions";
import InteractiveChart from "../../../components/graphs/InteractiveChart";
import DashboardOverviewToggles from "./DashboardOverviewToggles";
import DashboardOverviewRevenue from "./DashboardOverviewRevenue";
import { timeMonths } from "d3";

const dates = timeMonths(new Date("2009-01-01"), new Date("2015-12-31"));
const data = [];
for (let i = 0; i < dates.length; i++) {
  const dataEntry = {};
  const newNumber = Math.round(Math.random() * 100);
  dataEntry.date = dates[i];
  dataEntry.number = newNumber;
  data.push(dataEntry);
}

class DashboardOverview extends Component {
  state = {
    interactiveChart: true
  };

  handleInteractiveChart = () => {
    this.setState(prevState => ({
      interactiveChart: !prevState.interactiveChart
    }));
  };
  render() {
    let interactiveChartClass = "interactive-show";
    let intChartToggle = "intChartToggle";
    if (!this.state.interactiveChart) {
      interactiveChartClass = "interactive-hide";
      intChartToggle = "intChartToggle hide";
    }

    return (
      <div className="dashboard-overview">
        <h1>Chart of Total Users</h1>
        <p>Period: 2009 and 2015</p>
        <div className={interactiveChartClass}>
          <ContainerDimensions>
            {({ width }) => (
              <InteractiveChart
                data={data}
                width={width}
                height={500}
                tooltipClass="rect-tooltip"
              />
            )}
          </ContainerDimensions>
        </div>
        <p className="time-label">Time</p>
        <h2 className={intChartToggle} onClick={this.handleInteractiveChart}>
          Total Users
        </h2>
        <div className="dashboard-oberview-extra">
          <DashboardOverviewToggles />
        </div>
        <DashboardOverviewRevenue />
      </div>
    );
  }
}

export default DashboardOverview;
