import React from "react";
import ContainerDimensions from "react-container-dimensions";
import PhoneComparisonGraph from "../../../../../components/graphs/PhoneComparisonGraph";
import TotalOrdersTable from "./TotalOrdersTable";

const phoneData = [
  {
    date: "Mon",
    android: 7,
    apple: 2
  },
  {
    date: "Tue",
    android: 4,
    apple: 8
  },
  {
    date: "Wed",
    android: 4,
    apple: 8
  },
  {
    date: "Thu",
    android: 8,
    apple: 8
  },
  {
    date: "Fri",
    android: 3,
    apple: 8
  },
  {
    date: "Sat",
    android: 6,
    apple: 5
  },
  {
    date: "Sun",
    android: 7,
    apple: 0
  }
];

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
