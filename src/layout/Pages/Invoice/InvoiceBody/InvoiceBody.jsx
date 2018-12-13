import React from "react";

const InvoiceBody = () => {
  return (
    <div className="p2 table">
      <p className="table__header cell">#</p>
      <p className="table__header cell">Item</p>
      <p className="table__header cell">Quantity</p>
      <p className="table__header cell">Unit-Price</p>
      <p className="table__header cell">Sub-total</p>
      <p className="cell cell--odd">1</p>
      <p className="cell cell--odd">Website wireframe</p>
      <p className="cell cell--odd">5 hours</p>
      <p className="cell cell--odd">$50</p>
      <p className="cell cell--odd">$250</p>
      <p className="cell">2</p>
      <p className="cell">Graphic Design</p>
      <p className="cell">15 hours</p>
      <p className="cell">$50</p>
      <p className="cell">$750</p>
      <p className="cell cell--odd">3</p>
      <p className="cell cell--odd">React Front-End Development</p>
      <p className="cell cell--odd">20 hours</p>
      <p className="cell cell--odd">$100</p>
      <p className="cell cell--odd">$2,000</p>
      <p className="cell">4</p>
      <p className="cell">Node Back-End Development</p>
      <p className="cell">25 hours</p>
      <p className="cell">$100</p>
      <p className="cell">$2,500</p>
      <p className="cell cell--odd">5</p>
      <p className="cell cell--odd">SEO and Keyword Research</p>
      <p className="cell cell--odd">10 hours</p>
      <p className="cell cell--odd">$50</p>
      <p className="cell cell--odd">$500</p>
      <div className="table__header cell" />
      <div className="table__header cell" />
      <div className="table__header cell" />
      <p className="table__header cell">Total</p>
      <p className="table__header cell">$6,000</p>
    </div>
  );
};

export default InvoiceBody;
