import React from "react";
import StackedBarChart from "../graphs/StackedBarChart";
import SideMenuGraphCompareCount from "./SideMenuGraphCompareCount";

const data = [];
for (let i = 0; i < 31; i++) {
  const newEntry = {};
  newEntry.date = i.toString();
  newEntry.male = Math.random() * 4;
  newEntry.female = Math.random() * 4;
  data.push(newEntry);
}

const SideMenuGraphCompare = () => {
  return (
    <div className="graph-compare">
      <StackedBarChart
        data={data}
        width="220"
        height="70"
        margin={{ top: 25, right: 20 }}
        classNames={["male", "female"]}
      />
      <div className="graph-compare-icons">
        <SideMenuGraphCompareCount type="male" total={15} active={5} />
        <SideMenuGraphCompareCount type="female" total={12} active={8} />
      </div>
    </div>
  );
};

export default SideMenuGraphCompare;
