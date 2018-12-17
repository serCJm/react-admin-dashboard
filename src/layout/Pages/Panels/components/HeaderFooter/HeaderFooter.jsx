import React from "react";

const HeaderFooter = props => {
  return (
    <div className={`plr2 oa ${props.styleClass}`}>
      <h2>{props.heading}</h2>
      {props.miniHeading ? <h4>{props.miniHeading}</h4> : null}
    </div>
  );
};

export default HeaderFooter;
