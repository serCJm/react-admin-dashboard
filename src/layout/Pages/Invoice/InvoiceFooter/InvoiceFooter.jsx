import React from "react";
import ccIcons from "../../../../images/cc-icons.png";

const InvoiceFooter = () => {
  return (
    <div className="p2 f footer">
      <div className="footer__legal">
        <p className="mt0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
          turpis non laoreet euismod. Duis lobortis hendrerit bibendum. Fusce
          egestas tempus eros. Vestibulum lobortis nisl vel sem hendrerit
          suscipit. Duis eget orci in sapien dictum fringilla consectetur a
          urna. Nulla odio enim, gravida in blandit a, tincidunt eget augue.
          Pellentesque ultricies congue sapien at gravida.
        </p>
        <p>
          <strong>
            Thank you very much for choosing us. It was a pleasure to have
            worked with you.
          </strong>
        </p>
        <img src={ccIcons} alt="payment-methods" height={100} />
      </div>
      <div className="footer__amount table">
        <p className="table__header cell">AMOUNT DUE</p>
        <div className="table__header cell" />
        <p className="cell cell--odd">Subtotal</p>
        <p className="cell cell--odd">$6,000</p>
        <p className="cell">Tax (10%)</p>
        <p className="cell">$600</p>
        <p className="cell cell--odd">Total</p>
        <p className="cell cell--odd">$6,600</p>
      </div>
    </div>
  );
};

export default InvoiceFooter;
