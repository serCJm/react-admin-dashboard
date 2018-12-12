import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import InvoiceHeader from "./InvoiceHeader/InvoiceHeader";
import InvoiceBody from "./InvoiceBody/InvoiceBody";

const Invoice = () => {
  return (
    <PageElementWrapper>
      <div className="invoice">
        <InvoiceHeader />
        <InvoiceBody />
        {/* <InvoiceFooter /> */}
      </div>
    </PageElementWrapper>
  );
};

export default Invoice;
