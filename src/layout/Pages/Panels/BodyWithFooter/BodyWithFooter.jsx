import React from "react";
import BasicPanel from "../components/BasicPanel/BasicPanel";
import HeaderFooter from "../components/HeaderFooter/HeaderFooter";

const BodyWithFooter = () => {
  return (
    <React.Fragment>
      <BasicPanel />
      <HeaderFooter
        heading="Panel Body + Footer without Panel Header"
        miniHeading="Mini Heading"
        styleClass="c--lightRed"
      />
    </React.Fragment>
  );
};

export default BodyWithFooter;
