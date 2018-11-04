import React from "react";
import ContainerDimensions from "react-container-dimensions";
import DonutChart from "../../../../../components/graphs/DonutChart";

const data = [
  { name: "Abraham Lincoln", value: Math.floor(Math.random() * 100) },
  { name: "Agatha Christie", value: Math.floor(Math.random() * 100) },
  { name: "Albert Einstein", value: Math.floor(Math.random() * 100) },
  { name: "Cleopatra", value: Math.floor(Math.random() * 100) },
  { name: "Benjamin Franklin", value: Math.floor(Math.random() * 100) }
];

const Tickets = () => {
  return (
    <div>
      <h3>Tickets Cleared</h3>
      <p>by agents</p>
      <ContainerDimensions>
        {({ width }) => <DonutChart data={data} width={width} />}
      </ContainerDimensions>

      {/* <AgentsList />
      <AgentsPerformance /> */}
    </div>
  );
};

export default Tickets;
