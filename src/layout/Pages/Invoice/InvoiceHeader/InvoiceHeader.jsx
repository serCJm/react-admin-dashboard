import React from "react";
import logo from "../../../../images/logo_slider.png";

const InvoiceHeader = () => {
  return (
    <div className="fsb p2 header">
      <div>
        <img src={logo} alt="the best company" className="logo" width={200} />
        <h2 className="mtb1 text--black">The Best Company</h2>
        <address className="address">
          123 On The Best Street
          <br />
          Seattle, WA 12345
          <br />
          <abbr title="Phone">P:</abbr> 123-123-12-12 <br />
          <abbr title="Email">E:</abbr>{" "}
          <a className="email" href="mailto:thebestcomp@thebestcompexpl.com">
            <span className="text--green">thebestcomp@thebestcompexpl.com</span>
          </a>
        </address>
      </div>
      <div className="header__right">
        <h1 className="mtb1 heading text--black">Invoice #333333</h1>
        <p className="mtb05">Issued April 1, 2018</p>
        <p className="mtb05 text--red">Payment due date as soon as possible</p>
        <h2 className="mtb1 text--black">We Will Pay</h2>
        <address className="address">
          123 Send Invoice Here
          <br />
          Seattle, WA 54321
          <br />
          <abbr title="Phone">P: </abbr>123-123-12-12
        </address>
      </div>
    </div>
  );
};

export default InvoiceHeader;
