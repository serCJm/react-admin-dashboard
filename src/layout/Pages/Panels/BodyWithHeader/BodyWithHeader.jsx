import React from "react";
import BasicPanel from "../components/BasicPanel/BasicPanel";
import HeaderFooter from "../components/HeaderFooter/HeaderFooter";

const BodyWithFooter = () => {
  return (
    <React.Fragment>
      <HeaderFooter
        heading="Panel Body + Header without Panel Footer"
        miniHeading="Mini Heading"
        styleClass="c--green"
      />
      <BasicPanel />
    </React.Fragment>
  );
};

export default BodyWithFooter;
