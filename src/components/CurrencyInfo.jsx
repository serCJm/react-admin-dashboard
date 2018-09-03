import React from "react";

const CurrencyInfo = ({ cur1, cur2 }) => {
  return (
    <React.Fragment>
      <p className="cur">
        {cur1.ticker}{" "}
        <span className={cur1.gain ? "gain" : "loss"}>
          {cur1.gain ? cur1.gain : cur1.loss}
        </span>
      </p>
      <p className="cur-value">
        <span>{cur1.symbol}</span>
        {cur1.value}
      </p>
      <p className="cur">
        {cur2.ticker}
        <span className="cur-value">
          {cur2.symbol}
          {cur2.value}
        </span>
      </p>
    </React.Fragment>
  );
};

export default CurrencyInfo;
