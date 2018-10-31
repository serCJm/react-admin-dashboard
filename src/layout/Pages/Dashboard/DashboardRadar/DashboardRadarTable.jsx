import React from "react";
import DashboardRadarTableRow from "./DashboardRadarTableRow";

const content = [
  {
    title: "Bounce Rate:",
    text: "+46%",
    data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 20)),
    areaColor: "rgb(241, 186, 191)",
    className: "bounce-rate"
  },
  {
    title: "New Visits:",
    text: "+23%",
    data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 20)),
    areaColor: "rgb(138, 218, 205)",
    className: "new-visits"
  },
  {
    title: "Transactions:",
    text: "43,000 (+50%)",
    data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 20)),
    areaColor: "rgb(184, 212, 242)",
    className: "transactions"
  },
  {
    title: "Conversions:",
    text: "2000 (+75%)",
    data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 20)),
    areaColor: "rgb(69, 225, 206)",
    className: "conversions"
  }
];

const DashboardRadarTable = () => {
  return (
    <div className="radar-table">
      <DashboardRadarTableRow content={content} />
    </div>
  );
};

export default DashboardRadarTable;
