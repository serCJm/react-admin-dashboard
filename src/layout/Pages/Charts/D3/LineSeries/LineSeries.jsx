import React from "react";
import NoMarkers from "./NoMarkers/NoMarkers";
import Circular from "./Circular/Circular";
import Square from "./Square/Square";
import TriangleUp from "./Triangle-up/Triangle-up";
import Cross from "./Cross/Cross";
import Diamond from "./Diamond/Diamond";
import TriangleDown from "./TriangleDown/TriangleDown";
import ScatterPlot1000 from "./ScatterPlot/ScatterPlot";

const LineSeries = () => {
  return (
    <div className="line-series">
      <NoMarkers />
      <Circular />
      <Square />
      <TriangleUp />
      <Cross />
      <Diamond />
      <TriangleDown />
      <ScatterPlot1000 />
    </div>
  );
};

export default LineSeries;
