import React from "react";
import AvatarItemSimple from "./AvatarItemSimple";
import SimeMenuTimeLineAction from "./SideMenuTimeLineAction";
import SimeMenuTimeLineLocation from "./SideMenuTimeLineLocation";

const SideMenuTimeLine = ({ data, classNames }) => {
  const content = data.messages.map((message, i) => {
    if (message.type === "action") {
      return (
        <SimeMenuTimeLineAction key={i} message={message} style={data.style} />
      );
    } else if (message.type === "location") {
      return (
        <SimeMenuTimeLineLocation
          key={i}
          message={message}
          style={data.style}
        />
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
