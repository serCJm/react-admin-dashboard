import React from "react";
import AvatarItemSimple from "./AvatarItemSimple";
import SimeMenuTimeLineAction from "./SimeMenuTimeLineAction";

const SideMenuTimeLine = ({ data, classNames }) => {
  const content = data.messages.map((message, i) => {
    if (message.type === "action") {
      return (
        <SimeMenuTimeLineAction
          key={message.text}
          message={message}
          style={data.style}
        />
      );
    } else if (message.type === "location") {
      return (
        <React.Fragment>
          <h3 className={`timeline-date ${data.style}`}>{message.date}</h3>
          <p>
            Visiting&nbsp;
            <span className="place">{message.place}</span>
            &nbsp;at&nbsp;
            <span className="address">{message.location}</span>
          </p>
          {message.extraContent}
        </React.Fragment>
      );
    }
    return null;
  });
  return (
    <React.Fragment>
      <AvatarItemSimple
        name={data.name}
        avatar={data.avatar}
        style={data.style}
        classNames={classNames}
      />
      <div className="timeline-content">{content}</div>
    </React.Fragment>
  );
};

export default SideMenuTimeLine;
