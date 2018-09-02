import React, { Component } from "react";
import NasdaqGraph from "./graphs/NasdaqGraph";
import DowGraph from "./graphs/DowGraph";

const dataNasdaq = [];
for (let i = 0; i < 31; i++) {
  const newNumber = Math.random() * (4600 - 4300) + 4300;
  dataNasdaq.push(newNumber);
}

const dataDow = [];
for (let i = 0; i < 31; i++) {
  const newNumber = Math.random() * (17200 - 16300) + 16300;
  dataDow.push(newNumber);
}

const dowVolume = [];
for (let i = 0; i < 31; i++) {
  const newNumber = Math.random() * (112000000 - 75000000) + 75000000;
  dowVolume.push(newNumber);
}

class SideMenuGraphMarket extends Component {
  state = {};
  render() {
    return (
      <div className="market-info">
        <div>
          <h2 className="title">NASDAQ</h2>
          <NasdaqGraph
            data={dataNasdaq}
            width="100"
            height="40"
            margin={{ top: 10, right: 20 }}
          />
          {/* <CurrencyInfo></CurrencyInfo> */}
        </div>
        <div>
          <h2 className="title">DOW</h2>
          <DowGraph
            data={dataDow}
            dataVolume={dowVolume}
            width="100"
            height="40"
            margin={{ top: 10, right: 20 }}
          />
          {/* <CurrencyInfo></CurrencyInfo> */}
        </div>
      </div>
    );
  }
}

export default SideMenuGraphMarket;
