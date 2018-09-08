import React, { Component } from "react";
import StackedBarChart from "./graphs/StackedBarChart";

const data = [];
for (let i = 0; i < 31; i++) {
  const newEntry = {};
  newEntry.date = i.toString();
  newEntry.male = Math.random() * 4;
  newEntry.female = Math.random() * 4;
  data.push(newEntry);
}

class SideMenuGraphCompare extends Component {
  state = {};

  render() {
    return (
      <div className="graph-compare">
        <StackedBarChart
          data={data}
          width="220"
          height="70"
          margin={{ top: 25, right: 20 }}
          classNames={["male", "female"]}
        />
        <CompareCount type="male" />
        <CompareCount type="female" />
      </div>
    );
  }
}

export default SideMenuGraphCompare;
