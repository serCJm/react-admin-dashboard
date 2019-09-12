import React from "react";
import StackedBarChartNegative from "../../../../components/graphs/StackedBarChartNegative";
import ContainerDimensions from "react-container-dimensions";

const data = [
  {
    date: "2010",
    male: 35.90465731618246,
    female: -41.639420724761166
  },
  {
    date: "2011",
    male: 39.44963582440766,
    female: -60.20839299219442
  },
  {
    date: "2012",
    male: 39.49513079362473,
    female: -56.951992754153295
  },
  {
    date: "2013",
    male: 18.751474901458817,
    female: -3.1288623462385257
  },
  {
    date: "2014",
    male: 15.21000327274557,
    female: -27.077947750424514
  },
  {
    date: "2015",
    male: 32.78228287361644,
    female: -48.519346016581835
  }
];

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
