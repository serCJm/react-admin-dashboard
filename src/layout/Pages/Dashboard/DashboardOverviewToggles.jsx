import React, { Component } from "react";
import ToggleMenu from "./ToggleMenu";
import StackedBarChartNegative from "../../../components/graphs/StackedBarChartNegative";
import ContainerDimensions from "react-container-dimensions";
import SocialToggles from "./SocialToggles";
import Note from "./Note";

const data = [];
for (let i = 2010; i < 2016; i++) {
  const newEntry = {};
  newEntry.date = i.toString();
  newEntry.male = Math.random() * 40;
  newEntry.female = Math.random() * -80;
  data.push(newEntry);
}

class DashboardOverviewToggles extends Component {
  state = {
    active: "demographics"
  };

  handleActive = e => {
    e.preventDefault();
    this.setState({ active: e.currentTarget.id });
  };
  render() {
    let toggleItem = null;
    if (this.state.active === "demographics") {
      toggleItem = (
        <div>
          <h2>Demographics</h2>
          <h3>Visitors</h3>
          <div className="demographics">
            <ContainerDimensions>
              {({ width }) => (
                <StackedBarChartNegative
                  data={data}
                  width={width}
                  classNames={["male", "female"]}
                />
              )}
            </ContainerDimensions>
          </div>
          <div className="male-female-visitors">
            <p className="male">Male Visitors</p>
            <p className="female">Female Visitors</p>
          </div>
        </div>
      );
    } else if (this.state.active === "social") {
      toggleItem = <SocialToggles />;
    } else {
      toggleItem = <Note />;
    }
    return (
      <div className="dashboard-overview-toggles">
        <ToggleMenu
          handleActive={this.handleActive}
          active={this.state.active}
        />
        {toggleItem}
      </div>
    );
  }
}

export default DashboardOverviewToggles;
