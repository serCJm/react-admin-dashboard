import React from "react";

const BasicPanel = props => {
  let title = null;
  if (props.title) title = <h1>{props.title}</h1>;
  return (
    <div className="p2 panels__basic">
      {title}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        dapibus tempor nulla, ut varius sem hendrerit vel. Cras sed interdum
        justo, sed vestibulum risus. Aliquam erat volutpat. Proin hendrerit
        efficitur luctus. In sit amet ex ut ligula vestibulum tristique in sit
        amet velit.
      </p>
    </div>
  );
};

export default BasicPanel;
