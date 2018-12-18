import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import BasicPanel from "./components/BasicPanel/BasicPanel";
import BodyWithFooter from "./BodyWithFooter/BodyWithFooter";
import BodyWithHeader from "./BodyWithHeader/BodyWithHeader";
import BodyHeaderFooter from "./BodyHeaderFooter/BodyHeaderFooter";
import BodyHeaderTabsFooter from "./BodyHeaderTabsFooter/BodyHeaderTabsFooter";
import HeaderBodyTabsFooter from "./HeaderBodyTabsFooter/HeaderBodyTabsFooter";
import HeaderTabsBodyTabsFooter from "./HeaderTabsBodyTabsFooter/HeaderTabsBodyTabsFooter";
import Tabs2Body from "./Tabs2Body/Tabs2Body";

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
      <PageElementWrapper>
        <HeaderBodyTabsFooter />
      </PageElementWrapper>
      <PageElementWrapper>
        <HeaderTabsBodyTabsFooter />
      </PageElementWrapper>
      <PageElementWrapper>
        <Tabs2Body />
      </PageElementWrapper>
    </div>
  );
};

export default Panels;
