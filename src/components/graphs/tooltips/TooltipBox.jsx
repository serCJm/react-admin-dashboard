import React from "react";

const TooltipBox = props => {
  return (
    <div
      style={props.position}
      className={props.tooltipClass ? props.tooltipClass : "tooltip-box"}
    >
      <p className="text">{props.text1}</p>
      {props.text2 ? <p className="text">{props.text2}</p> : null}
    </div>
  );
};

export default TooltipBox;
