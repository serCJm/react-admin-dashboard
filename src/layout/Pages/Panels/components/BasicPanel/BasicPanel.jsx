import React from "react";

const BasicPanel = props => {
  let title = null;
  if (props.title) title = <h1>{props.title}</h1>;
  let text = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus
      tempor nulla, ut varius sem hendrerit vel. Cras sed interdum justo, sed
      vestibulum risus. Aliquam erat volutpat. Proin hendrerit efficitur luctus.
      In sit amet ex ut ligula vestibulum tristique in sit amet velit.
    </p>
  );
  if (props.text) text = <p>{props.text}</p>;
  return (
    <div className="p2 panels__basic">
      {title}
      {text}
    </div>
  );
};

export default BasicPanel;
