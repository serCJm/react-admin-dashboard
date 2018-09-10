import React from "react";

const SideMenuTimeLineLocation = ({ message, style }) => {
  return (
    <React.Fragment>
      <h3 className={`timeline-date ${style}`}>{message.date}</h3>
      <p>{message.text}</p>
      <div className="action-btns">
        <button className="btn-accept">{message.btnAccept}</button>
        <button className="btn-reject">{message.btnReject}</button>
      </div>
    </React.Fragment>
  );
};

export default SideMenuTimeLineLocation;
