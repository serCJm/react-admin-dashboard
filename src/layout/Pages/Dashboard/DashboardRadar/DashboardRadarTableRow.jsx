import React from "react";
import AreaLineChart from "../../../../components/graphs/AreaLineChart";
const DashboardRadarTableRow = props => {
  return (
    <React.Fragment>
      {props.content.map(d => (
        <div className="radar-table-row" key={d.title}>
          <h3>{d.title}</h3>
          <p className={d.className}>
            <strong>{d.text}</strong>
          </p>
          <AreaLineChart
            data={d.data}
            width="100"
            height="30"
            margin={{ top: 10 }}
            areaColor={d.areaColor}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default DashboardRadarTableRow;
