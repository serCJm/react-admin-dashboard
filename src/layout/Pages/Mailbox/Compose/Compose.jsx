import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import ComposeControls from "./ComposeControls/ComposeControls";
import ComposeSendForm from "./ComposeSendForm/ComposeSendForm";

const Compose = () => {
  return (
    <PageElementWrapper>
      <div className="compose">
        <ComposeControls />
        <ComposeSendForm />
      </div>
    </PageElementWrapper>
  );
};

export default Compose;
