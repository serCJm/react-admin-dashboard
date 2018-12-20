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
import BodyTabs2 from "./BodyTabs2/BodyTabs2";
import Tabs2BodyTabs2 from "./Tabs2BodyTabs2/Tabs2BodyTabs2";
import Tabs2SideBody from "./Tabs2SideBody/Tabs2SideBody";
import BodyTabs2Side from "./BodyTabs2Side/BodyTabs2Side";
import Tabs2SideBodyTabs2Side from "./Tabs2SideBodyTabs2Side/Tabs2SideBodyTabs2Side";

const Panels = () => {
  return (
    <div className="panels">
      <div className="three-column-grid">
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
        <PageElementWrapper>
          <BodyTabs2 />
        </PageElementWrapper>
      </div>
      <div className="mtb2 two-column-grid">
        <div className="panel--long">
          <PageElementWrapper>
            <Tabs2BodyTabs2 />
          </PageElementWrapper>
        </div>
        <PageElementWrapper>
          <Tabs2SideBody />
        </PageElementWrapper>
        <PageElementWrapper>
          <BodyTabs2Side />
        </PageElementWrapper>
        <div className="panel--long">
          <PageElementWrapper>
            <Tabs2SideBodyTabs2Side />
          </PageElementWrapper>
        </div>
      </div>
    </div>
  );
};

export default Panels;
