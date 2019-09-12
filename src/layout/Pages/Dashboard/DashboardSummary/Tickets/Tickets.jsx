import React from "react";
import ContainerDimensions from "react-container-dimensions";
import DonutChart from "../../../../../components/graphs/DonutChart";
import AgentsList from "./AgentsList";
import AgentsPerformance from "./AgentsPerformance";

const data = [
  {
    name: "Abraham Lincoln",
    value: 72
  },
  {
    name: "Agatha Christie",
    value: 65
  },
  {
    name: "Albert Einstein",
    value: 11
  },
  {
    name: "Cleopatra",
    value: 18
  },
  {
    name: "Benjamin Franklin",
    value: 0
  }
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
