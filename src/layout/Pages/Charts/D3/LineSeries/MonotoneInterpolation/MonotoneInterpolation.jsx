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
        <div className="p1 monotoneX">
          <h1 className="mt2">MonotoneX Interpolation</h1>
          <ContainerDimensions>
            {({ width }) => (
              <Interpolation
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--monotoneX"
                theme="rgb(100, 149, 237)"
                tooltipClass="rect-tooltip rect-tooltip--monotoneX"
                show={this.state.chart}
                type="monotoneX"
                pathId="monotone"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--monotoneX"
            onClick={this.handleShowChart}
          >
            MonotoneX
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default BSplineInterpolation;
