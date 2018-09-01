import React from "react";

const NumberDisplay = props => {
  return (
    <div className={props.classNames}>
      <p className="text">{props.number}</p>
    </div>
  );
};

export default NumberDisplay;
