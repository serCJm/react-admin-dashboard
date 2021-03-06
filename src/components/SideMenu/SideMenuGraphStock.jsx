import React, { Component } from "react";
import SimpleBarChart from "../graphs/SimpleBarChart";
import NumberDisplay from "../NumberDisplay";

const data = [];
for (let i = 0; i < 12; i++) {
  const newNumber = Math.random() * 2 - 1;
  data.push(newNumber);
}

class SideMenuGraphStock extends Component {
  state = {
    stockTitle: "APPL",
    stockData: null
  };

  render() {
    return (
      <div className="stock-info">
        <div>
          <h2 className="title">{this.state.stockTitle}</h2>
          <SimpleBarChart
            data={data}
            width="110"
            height="40"
            margin={{ top: 10, right: 20 }}
            classNames={{ bar1: "bar-red", bar2: "bar-green" }}
          />
        </div>
        <div>
          <h2 className="title">Yearly Change</h2>
          <NumberDisplay classNames="yearly-change" number="+120%" />
        </div>
      </div>
    );
  }
}

export default SideMenuGraphStock;
