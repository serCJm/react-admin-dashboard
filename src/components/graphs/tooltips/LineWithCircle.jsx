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
        stroke={props.lineColor ? props.lineColor : "red"}
        strokeWidth={props.lineWidth ? props.lineWidth : "1"}
      />
      <circle
        cx={props.tooltip.xGraph}
        cy={props.tooltip.yGraph}
        r={props.circleRadius ? props.circleRadius : "3"}
        fill={props.circleFill ? props.circleFill : "green"}
        stroke={props.circleStroke ? props.circleStroke : null}
        strokeWidth={props.circleStrokeWidth ? props.circleStrokeWidth : "1"}
      />
      {/* <RectInfoBox tooltip={props.tooltip} /> */}
    </g>
  );
};

export default LineWithCircle;
