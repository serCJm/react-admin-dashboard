import React from "react";
import AreaLineChart from "../graphs/AreaLineChart";

const data = [];
for (let i = 0; i < 31; i++) {
  const newNumber = Math.floor(Math.random() * 21);
  data.push(newNumber);
}

const SideMenuGraphArea = () => {
  return (
    <AreaLineChart data={data} width="225" height="50" margin={{ top: 10 }} />
  );
};

export default SideMenuGraphArea;
