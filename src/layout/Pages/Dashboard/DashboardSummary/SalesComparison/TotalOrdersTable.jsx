import React from "react";
import TotalOrdersTableRow from "./TotalOrdersTableRow";

const content = [
  {
    total: "9,999",
    data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 20)),
    percent: "+10%"
  },
  {
    total: "1,500",
    data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 20)),
    percent: "0%"
  },
  {
    total: "3,000",
    data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 20)),
    percent: "-70%"
  }
];

const TotalOrdersTable = () => {
  return (
    <div className="total-orders-table">
      <TotalOrdersTableRow content={content} />
    </div>
  );
};

export default TotalOrdersTable;
