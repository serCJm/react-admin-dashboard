import React, { Component } from "react";
import NasdaqGraph from "./graphs/NasdaqGraph";
// import NasdaqGraph from "./graphs/NasdaqGraphcopy";
import DowGraph from "./graphs/DowGraph";
import CurrencyInfo from "./CurrencyInfo";

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
  state = {
    cur1: {
      ticker: "USD",
      symbol: <span>&#36;</span>,
      gain: "0.43%",
      loss: null,
      value: 500
    },
    cur2: {
      ticker: "EUR",
      symbol: <span>&euro;</span>,
      value: 300
    },
    cur3: {
      ticker: "CNY",
      symbol: <span>&#165;</span>,
      gain: null,
      loss: "0.25%",
      value: 3200.0
    },
    cur4: {
      ticker: "GDP",
      symbol: <span>&#163;</span>,
      value: 350.45
    }
  };
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
          <CurrencyInfo cur1={this.state.cur1} cur2={this.state.cur2} />
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
          <CurrencyInfo cur1={this.state.cur3} cur2={this.state.cur4} />
        </div>
      </div>
    );
  }
}

export default SideMenuGraphMarket;
