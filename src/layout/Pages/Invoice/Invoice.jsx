import React, { Component } from "react";
import PageElementWrapper from "../PageElementWrapper";
import InvoiceHeader from "./InvoiceHeader/InvoiceHeader";
import InvoiceBody from "./InvoiceBody/InvoiceBody";
import InvoiceFooter from "./InvoiceFooter/InvoiceFooter";

class Invoice extends Component {
  state = {};

  handlePrintArea = () => {
    const printContent = document.querySelector(".invoiceToPrint");
    console.log("public url: ", process.env.PUBLIC_URL);
    const print = document.getElementById("ifmcontentstoprint").contentWindow;
    print.document.write(
      "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'>"
    );
    print.document.write(
      `<link rel="stylesheet" href="${process.env.PUBLIC_URL +
        "/printStyles.css"}">`
    );
    print.document.write(
      '</head><body onload="print();close();"><div class="invoice">'
    );
    print.document.write(printContent.innerHTML);
    print.document.write("</div></body></html>");
    print.focus();
    print.document.close();
  };
  render() {
    return (
      <PageElementWrapper>
        <div className="invoice">
          <div className="invoiceToPrint">
            <InvoiceHeader />
            <InvoiceBody />
            <InvoiceFooter />
          </div>
          <button
            onClick={this.handlePrintArea}
            className="mtb1 ptb1 plr2 btn__print"
          >
            Print Invoice
          </button>
          <iframe
            id="ifmcontentstoprint"
            title="print"
            style={{ height: "0px", width: "0px", position: "absolute" }}
          />
        </div>
      </PageElementWrapper>
    );
  }
}

export default Invoice;
