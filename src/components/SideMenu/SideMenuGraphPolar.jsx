import React from "react";
import PolarAreaChart from "../graphs/PolarAreaChart";

const data = [
  {
    category: "category1",
    number: 100
  },
  {
    category: "category2",
    number: 110
  },
  {
    category: "category3",
    number: 120
  },
  {
    category: "category4",
    number: 130
  },
  {
    category: "category5",
    number: 200
  }
];

const SideMenuGraphPolar = () => {
  return <PolarAreaChart width="200" height="160" radius="70" data={data} />;
};

export default SideMenuGraphPolar;
