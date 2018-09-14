import React from "react";

const SideMenuTimeLineMessage = ({ message, style }) => {
  return (
    <React.Fragment>
      <h3 className={`timeline-date ${style}`}>{message.date}</h3>
      <p>{message.text}</p>
      {message.extraContent}
    </React.Fragment>
  );
};

export default SideMenuTimeLineMessage;
