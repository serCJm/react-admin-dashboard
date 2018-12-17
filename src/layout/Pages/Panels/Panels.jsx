import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import BasicPanel from "./components/BasicPanel/BasicPanel";
import BodyWithFooter from "./BodyWithFooter/BodyWithFooter";
import BodyWithHeader from "./BodyWithHeader/BodyWithHeader";
import BodyHeaderFooter from "./BodyHeaderFooter/BodyHeaderFooter";
import BodyHeaderTabsFooter from "./BodyHeaderTabsFooter/BodyHeaderTabsFooter";

const Panels = () => {
  return (
    <div className="panels">
      <PageElementWrapper>
        <BasicPanel title="Basic Panel" />
      </PageElementWrapper>
      <PageElementWrapper>
        <BodyWithFooter />
      </PageElementWrapper>
      <PageElementWrapper>
        <BodyWithHeader />
      </PageElementWrapper>
      <PageElementWrapper>
        <BodyHeaderFooter />
      </PageElementWrapper>
      <PageElementWrapper>
        <BodyHeaderTabsFooter />
      </PageElementWrapper>
    </div>
  );
};

export default Panels;
