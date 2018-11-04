import React from "react";
import ContainerDimensions from "react-container-dimensions";
import DonutChart from "../../../../../components/graphs/DonutChart";
import AgentsList from "./AgentsList";
import AgentsPerformance from "./AgentsPerformance";

const data = [
  { name: "Abraham Lincoln", value: Math.floor(Math.random() * 100) },
  { name: "Agatha Christie", value: Math.floor(Math.random() * 100) },
  { name: "Albert Einstein", value: Math.floor(Math.random() * 100) },
  { name: "Cleopatra", value: Math.floor(Math.random() * 100) },
  { name: "Benjamin Franklin", value: Math.floor(Math.random() * 100) }
];

const Tickets = () => {
  return (
    <div className="tickets">
      <h3>Tickets Cleared</h3>
      <p>by agents</p>
      <ContainerDimensions>
        {({ width }) => <DonutChart data={data} width={width} />}
      </ContainerDimensions>

      <AgentsList content={data} />
      <AgentsPerformance content={data} />
    </div>
  );
};

export default Tickets;
