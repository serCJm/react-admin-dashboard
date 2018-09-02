import React from "react";

const TooltipBox = props => {
  return (
    <div style={props.position} className="tooltip-box">
      <p className="text">{props.text1}</p>
    </div>
  );
};

export default TooltipBox;
