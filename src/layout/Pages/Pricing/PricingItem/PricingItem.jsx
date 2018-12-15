import React from "react";

const PricingItem = ({ content }) => {
  const { header, price, domains, cpu, ram, bandwidth, space } = content;

  let proClass = "";
  if (header === "pro") {
    proClass = " pricing--pro";
  }
  return (
    <div className={`pricing__item${proClass}`}>
      <div className={`pt2 header${proClass}`}>
        <h1 className="mt0 title">{header}</h1>
        <p className={`m0 fc br price${proClass}`}>{price}</p>
      </div>
      <p className="mtb2 text">
        <span className="text__emph">{domains}</span> domain
      </p>
      <p className="mtb2 text">
        <span className="text__emph">{cpu}</span> CPU
      </p>
      <p className="mtb2 text">
        <span className="text__emph">{ram}</span> RAM
      </p>
      <p className="mtb2 text">
        <span className="text__emph">{bandwidth}</span> bandwidth
      </p>
      <p className="mtb2 text">
        <span className="text__emph">{space}</span> space
      </p>
      <button className={`ptb1 plr2 mtb2 btn${proClass}`}>Choose plan</button>
    </div>
  );
};

export default PricingItem;
