import React from "react";
import ContainerDimensions from "react-container-dimensions";
import PhoneComparisonGraph from "../../../../../components/graphs/PhoneComparisonGraph";
import TotalOrdersTable from "./TotalOrdersTable";

const phoneData = [];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
for (let i = 0; i < days.length; i++) {
  const newEntry = {};
  newEntry.date = days[i];
  newEntry.android = Math.floor(Math.random() * 10);
  newEntry.apple = Math.floor(Math.random() * 10);
  phoneData.push(newEntry);
}

const SalesComparison = () => {
  return (
    <div className="sales-comparison">
      <h1>Android vs Apple</h1>
      <p>weekly sales data</p>
      <ContainerDimensions>
        {({ width }) => (
          <PhoneComparisonGraph
            data={phoneData}
            width={width}
            classNames={["android", "apple"]}
          />
        )}
      </ContainerDimensions>

      <TotalOrdersTable />
    </div>
  );
};

export default SalesComparison;
