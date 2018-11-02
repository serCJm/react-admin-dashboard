import React from "react";
import SimpleBarChart from "../../../../../components/graphs/SimpleBarChart";

const TotalOrdersTableRow = ({ content }) => {
  return (
    <React.Fragment>
      {content.map((data, i) => (
        <div className="total-orders-table-row" key={i + data.total}>
          <div className="total-orders-header">
            <h3>Total Orders</h3>
            <p>
              <strong>{data.total}</strong>
            </p>
          </div>
          <SimpleBarChart
            data={data.data}
            width="100"
            height="50"
            margin={{ top: 10, right: 0 }}
            paddingInner="yes"
            classNames={{ bar1: null, bar2: "total-orders-graph" }}
          />
          <p className="total-order-percent">{data.percent}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default TotalOrdersTableRow;
