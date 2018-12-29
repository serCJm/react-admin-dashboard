import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import ContainerDimensions from "react-container-dimensions";
import Interpolation from "../Charts/Interpolations/Interpolation";

const data1 = [];
for (let i = 0; i <= 20; i++) {
  const number = Math.random() * 35;
  data1.push(number);
}

class BSplineInterpolation extends Component {
  state = {
    chart: true
  };

  handleShowChart = () => {
    this.setState(prevState => ({
      chart: !prevState.chart
    }));
  };
  render() {
    return (
      <PageElementWrapper>
        <div className="p1 b-spline">
          <h1 className="mt2">B-Spline Interpolation</h1>
          <ContainerDimensions>
            {({ width }) => (
              <Interpolation
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--b-spline"
                theme="rgb(128, 0, 64)"
                tooltipClass="rect-tooltip rect-tooltip--b-spline"
                show={this.state.chart}
                type="b-spline"
                pathId="b-spline"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--dark-pink"
            onClick={this.handleShowChart}
          >
            B-spline
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default BSplineInterpolation;
