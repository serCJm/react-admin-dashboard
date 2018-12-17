import React, { Component } from "react";
import BasicPanel from "../components/BasicPanel/BasicPanel";
import HeaderFooter from "../components/HeaderFooter/HeaderFooter";
import PlainTabsHeader from "../components/PlainTabsHeader/PlainTabsHeader";

class BodyHeaderTabsFooter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <HeaderFooter
          heading="Panel Header + Plain Tabs"
          styleClass="c--purple"
        />
        <PlainTabsHeader styleClass="c--purple" />
        <BasicPanel />
        <HeaderFooter
          heading="Panel Footer"
          miniHeading="Mini Heading"
          styleClass="c--purple"
        />
      </React.Fragment>
    );
  }
}

export default BodyHeaderTabsFooter;
