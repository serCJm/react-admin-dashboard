import React from "react";
// import RectInfoBox from "./RectInfoBox";

const LineWithCircle = props => {
  return (
    <g pointerEvents="none">
      <line
        x1={props.tooltip.xGraph}
        x2={props.tooltip.xGraph}
        y1={props.tooltip.y1}
        y2={props.tooltip.y2}
        fill="none"
        stroke="red"
        strokeWidth="1"
      />
      <circle
        cx={props.tooltip.xGraph}
        cy={props.tooltip.yGraph}
        r="3"
        fill="green"
      />
      {/* <RectInfoBox tooltip={props.tooltip} /> */}
    </g>
  );
};

export default LineWithCircle;
