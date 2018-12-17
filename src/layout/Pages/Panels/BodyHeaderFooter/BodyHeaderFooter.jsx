import React from "react";
import BasicPanel from "../components/BasicPanel/BasicPanel";
import HeaderFooter from "../components/HeaderFooter/HeaderFooter";

const BodyWithFooter = () => {
  return (
    <React.Fragment>
      <HeaderFooter
        heading="Panel Header"
        miniHeading="Mini Heading"
        styleClass="c--blue"
      />
      <BasicPanel />
      <HeaderFooter
        heading="Panel Footer"
        miniHeading="Mini Heading"
        styleClass="c--lightBlue"
      />
    </React.Fragment>
  );
};

export default BodyWithFooter;
