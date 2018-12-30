import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import ContainerDimensions from "react-container-dimensions";
import Interpolation from "../Charts/Interpolations/Interpolation";

const data1 = [];
for (let i = 0; i <= 20; i++) {
  const number = Math.random() * 35;
  data1.push(number);
}

class StepAfter extends Component {
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
        <div className="p1 step-after">
          <h1 className="mt2">Step-After Interpolation</h1>
          <ContainerDimensions>
            {({ width }) => (
              <Interpolation
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--step-after"
                theme="rgb(255, 0, 0)"
                tooltipClass="rect-tooltip rect-tooltip--step-after"
                show={this.state.chart}
                type="step-after"
                pathId="stepAfter"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--step-after"
            onClick={this.handleShowChart}
          >
            Step-after
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default StepAfter;
