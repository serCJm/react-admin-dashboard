import React from "react";

const AgensList = ({ content }) => {
  return (
    <div className="tickets-agents">
      {content.map((item, i) => (
        <p key={item.name + i} className="tickets-agents-agent">
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default AgensList;
