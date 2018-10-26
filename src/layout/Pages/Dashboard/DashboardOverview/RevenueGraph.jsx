import React from "react";
import SimpleBarChart from "../../../../components/graphs/SimpleBarChart";
import ContainerDimensions from "react-container-dimensions";

const dataDailyLoad = [];
for (let i = 0; i < 14; i++) {
  const newNumber = Math.round(Math.random() * 100);
  dataDailyLoad.push(newNumber);
}

const RevenueGraph = () => {
  return (
    <div className="revenue-graph">
      <div className="daily-load">
        <p className="daily-load-text">Daily Load</p>
        <p className="daily-load-text">67%</p>
      </div>
      <ContainerDimensions>
        {({ width }) => (
          <SimpleBarChart
            data={dataDailyLoad}
            width={width}
            height="200"
            margin={{ top: 10, right: 10 }}
            paddingInner="yes"
            lineWithCircle="yes"
            classNames={{ bar1: null, bar2: "revenue-graph-bars" }}
            tooltipClass="revenue-graph-tooltip"
            lineColor="white"
            circleStroke="white"
          />
        )}
      </ContainerDimensions>
    </div>
  );
};

export default RevenueGraph;
