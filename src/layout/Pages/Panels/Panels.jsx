import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import BasicPanel from "./BasicPanel/BasicPanel";

const Panels = () => {
  return (
    <div className="panels">
      <PageElementWrapper>
        <BasicPanel title="Basic Panel" />
      </PageElementWrapper>
    </div>
  );
};

export default Panels;
