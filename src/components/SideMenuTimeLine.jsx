import React from "react";
import AvatarItemSimple from "./AvatarItemSimple";
import SimeMenuTimeLineAction from "./SideMenuTimeLineAction";
import SimeMenuTimeLineLocation from "./SideMenuTimeLineLocation";
import SideMenuTimeLineMessage from "./SideMenuTimeLineMessage";
import SimeMenuTimeLineNode from "./SimeMenuTimeLineNode";

const SideMenuTimeLine = ({ data }) => {
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
    } else if (message.type === "node") {
      return (
        <SimeMenuTimeLineNode key={i} message={message} style={data.style} />
      );
    } else {
      return (
        <SideMenuTimeLineMessage key={i} message={message} style={data.style} />
      );
    }
  });

  return (
    <React.Fragment>
      <AvatarItemSimple
        name={data.name}
        avatar={data.avatar}
        style={data.style}
      />
      <div className="timeline-content">{content}</div>
    </React.Fragment>
  );
};

export default SideMenuTimeLine;
