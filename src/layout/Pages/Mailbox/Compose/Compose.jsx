import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import ComposeControls from "./ComposeControls/ComposeControls";

const Compose = () => {
  return (
    <PageElementWrapper>
      <div className="compose">
        <ComposeControls />
      </div>
    </PageElementWrapper>
  );
};

export default Compose;
