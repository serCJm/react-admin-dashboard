import React from "react";

const AgentsPerformance = ({ content }) => {
  return (
    <div className="tickets-performance">
      {content.map((item, i) => (
        <div key={item.name + i} className="tickets-performance-row">
          <div className="tickets-performance-graph-container">
            <div
              className="tickets-performance-graph"
              style={{ width: (item.value * 20) / 100 + "rem" }}
            >
              {item.name}
            </div>
          </div>
          <p className="tickets-performance-value">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AgentsPerformance;
