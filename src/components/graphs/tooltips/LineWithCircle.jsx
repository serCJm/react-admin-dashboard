import React from "react";

const LineWithCircle = props => {
  return (
    <g>
      <line
        x1={props.tooltip.x1}
        x2={props.tooltip.x2}
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
      <g>
        <rect
          x={props.tooltip.x1 + 10}
          y={props.tooltip.mouseY - 25}
          width="28"
          height="24"
          fill="rgba(0, 0, 0, .6)"
          stroke="none"
        />
        <text
          x={props.tooltip.x1 + 24}
          y={props.tooltip.mouseY - 7}
          textAnchor="middle"
          fill="white"
        >
          {props.tooltip.yValue}
        </text>
      </g>
    </g>
  );
};

export default LineWithCircle;
