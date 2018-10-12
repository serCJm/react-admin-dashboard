import React from "react";
import ContainerDimensions from "react-container-dimensions";
import PageElementWrapper from "../PageElementWrapper";
import InteractiveChart from "../../../components/graphs/InteractiveChart";
import { timeMonths } from "d3";

const dates = timeMonths(new Date("2009-01-01"), new Date("2015-12-31"));
const data = [];
for (let i = 0; i < dates.length; i++) {
  const dataEntry = {};
  const newNumber = Math.round(Math.random() * 100);
  dataEntry.date = dates[i];
  dataEntry.number = newNumber;
  data.push(dataEntry);
}

const Dashboard = () => {
  return (
    <PageElementWrapper>
      <ContainerDimensions>
        {({ width }) => (
          <InteractiveChart data={data} width={width} height={500} />
        )}
      </ContainerDimensions>
    </PageElementWrapper>
  );
};

export default Dashboard;
