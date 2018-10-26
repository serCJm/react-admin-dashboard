import React from "react";
import StackedBarChartNegative from "../../../../components/graphs/StackedBarChartNegative";
import ContainerDimensions from "react-container-dimensions";

const data = [];
for (let i = 2010; i < 2016; i++) {
  const newEntry = {};
  newEntry.date = i.toString();
  newEntry.male = Math.random() * 40;
  newEntry.female = Math.random() * -80;
  data.push(newEntry);
}

const VisitorsChart = props => {
  return (
    <div className="visitors-chart">
      <h2>Demographics</h2>
      <h3>Visitors</h3>
      <div className="demographics">
        <ContainerDimensions>
          {({ width }) => (
            <StackedBarChartNegative
              data={data}
              width={width}
              classNames={["male", "female"]}
            />
          )}
        </ContainerDimensions>
      </div>
      <div className="male-female-visitors">
        <p className="male">Male Visitors</p>
        <p className="female">Female Visitors</p>
      </div>
    </div>
  );
};

export default VisitorsChart;
