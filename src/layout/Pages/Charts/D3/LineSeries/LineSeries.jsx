import React from "react";
import NoMarkers from "./NoMarkers/NoMarkers";
import Circular from "./Circular/Circular";
import Square from "./Square/Square";
import TriangleUp from "./Triangle-up/Triangle-up";
import Cross from "./Cross/Cross";
import Diamond from "./Diamond/Diamond";
import TriangleDown from "./TriangleDown/TriangleDown";
import ScatterPlot1000 from "./ScatterPlot/ScatterPlot";
import BSplineInterpolation from "./BSplineInterpolation/BSplineInterpolation";
import MonotoneInterpolation from "./MonotoneInterpolation/MonotoneInterpolation";
import StepBefore from "./StepBefore/StepBefore";
import StepAfter from "./StepAfter/StepAfter";
import Cardinal from "./Cardinal/Cardinal";
import Linear from "./Linear/Linear";

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
      <BSplineInterpolation />
      <MonotoneInterpolation />
      <StepBefore />
      <StepAfter />
      <Cardinal />
      <Linear />
    </div>
  );
};

export default LineSeries;
