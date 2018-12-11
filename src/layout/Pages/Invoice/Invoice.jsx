import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import InvoiceHeader from "./InvoiceHeader/InvoiceHeader";

const Invoice = () => {
  return (
    <PageElementWrapper>
      <div className="invoice">
        <InvoiceHeader />
        {/* <InvoiceBody />
      <InvoiceFooter /> */}
      </div>
    </PageElementWrapper>
  );
};

export default Invoice;
