import React from "react";
import TotalOrdersTableRow from "./TotalOrdersTableRow";

const content = [
  {
    total: "9,999",
    data: [12, 9, 10, 15, 7, 19, 6, 16, 5, 14, 15, 10, 19, 5, 16],
    percent: "+10%"
  },
  {
    total: "1,500",
    data: [9, 9, 18, 16, 1, 1, 6, 19, 8, 9, 4, 1, 6, 6, 9],
    percent: "0%"
  },
  {
    total: "3,000",
    data: [18, 16, 14, 9, 15, 5, 9, 12, 15, 7, 6, 3, 6, 19, 19],
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
