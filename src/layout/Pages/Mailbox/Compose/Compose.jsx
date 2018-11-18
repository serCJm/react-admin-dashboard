import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import ComposeControls from "./ComposeControls/ComposeControls";
import ComposeSendForm from "./ComposeSendForm/ComposeSendForm";
import "react-trumbowyg/dist/trumbowyg.min.css";
import Trumbowyg from "react-trumbowyg";

const Compose = () => {
  return (
    <PageElementWrapper>
      <div className="compose">
        <ComposeControls />
        <ComposeSendForm />
        <Trumbowyg
          id="react-trumbowyg"
          data="Get the force flowing through through your words..."
        />
      </div>
    </PageElementWrapper>
  );
};

export default Compose;
