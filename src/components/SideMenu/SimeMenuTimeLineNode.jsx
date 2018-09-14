import React from "react";

const SimeMenuTimeLineNode = ({ message, style }) => {
  return (
    <React.Fragment>
      <h3 className={`timeline-date ${style}`}>{message.date}</h3>
      <p>
        {`${message.text} `}
        {message.nodes.map((node, i) => {
          if (i === message.nodes.length - 1) {
            return (
              <React.Fragment key={i}>
                <span> and </span>
                <span className="node">{node}</span>
                <span>.</span>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={i}>
                <span className="node">{node}</span>
                <span>, </span>
              </React.Fragment>
            );
          }
        })}
      </p>
      {message.extraContent}
    </React.Fragment>
  );
};

export default SimeMenuTimeLineNode;
