import React from "react";

const RectInfoBox = props => {
  return (
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
  );
};

export default RectInfoBox;
