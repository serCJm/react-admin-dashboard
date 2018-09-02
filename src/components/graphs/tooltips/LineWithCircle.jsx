import React from "react";
import RectInfoBox from "./RectInfoBox";

const LineWithCircle = props => {
  return (
    <g>
      <line
        x1={props.tooltip.x1}
        x2={props.tooltip.x1}
        y1={props.tooltip.y1}
        y2={props.tooltip.y2}
        fill="none"
        stroke="red"
        strokeWidth="1"
      />
      <circle
        cx={props.tooltip.x1}
        cy={props.tooltip.yExact}
        r="2"
        fill="green"
      />
      <RectInfoBox tooltip={props.tooltip} />
    </g>
  );
};

export default LineWithCircle;
