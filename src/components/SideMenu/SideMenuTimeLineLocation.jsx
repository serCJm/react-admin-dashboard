import React from "react";

const SideMenuTimeLineLocation = ({ message, style }) => {
  return (
    <React.Fragment>
      <h3 className={`timeline-date ${style}`}>{message.date}</h3>
      <p>
        Visiting&nbsp;
        <span className="place">{message.place}</span>
        &nbsp;at&nbsp;
        <span className="address">{message.location}</span>
      </p>
      {message.extraContent}
    </React.Fragment>
  );
};

export default SideMenuTimeLineLocation;
