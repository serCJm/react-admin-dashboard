import React from "react";
import NoMarkers from "./NoMarkers/NoMarkers";
import Circular from "./Circular/Circular";

const LineSeries = () => {
  return (
    <div className="line-series">
      <NoMarkers />
      <Circular />
    </div>
  );
};

export default LineSeries;
