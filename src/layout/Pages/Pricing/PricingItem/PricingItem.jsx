import React from "react";
import { ThemeContext } from "../../../../components/Header/theme-context";

const PricingItem = ({ content }) => {
  const { header, price, domains, cpu, ram, bandwidth, space } = content;

  let proClass = "";
  if (header === "pro") {
    proClass = " pricing--pro ";
  }
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={`pricing__item${proClass}`}>
          <div
            className={
              header === "pro" ? `pt2 header${proClass + theme}` : "pt2 header"
            }
          >
            <h1 className="mt0 title">{header}</h1>
            <p
              className={
                header === "pro"
                  ? `m0 fc br price${proClass + theme}`
                  : "m0 fc br price"
              }
            >
              {price}
            </p>
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
          <button
            className={
              header === "pro"
                ? `ptb1 plr2 mtb2 btn${proClass + theme}`
                : "ptb1 plr2 mtb2 btn"
            }
          >
            Choose plan
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default PricingItem;
