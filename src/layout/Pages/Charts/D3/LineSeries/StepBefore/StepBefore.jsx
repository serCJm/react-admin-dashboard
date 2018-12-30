import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import ContainerDimensions from "react-container-dimensions";
import Interpolation from "../Charts/Interpolations/Interpolation";

const data1 = [];
for (let i = 0; i <= 20; i++) {
  const number = Math.random() * 35;
  data1.push(number);
}

class StepBefore extends Component {
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
        <div className="p1 step-before">
          <h1 className="mt2">Step-Before Interpolation</h1>
          <ContainerDimensions>
            {({ width }) => (
              <Interpolation
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--step-before"
                theme="rgb(0, 128, 255)"
                tooltipClass="rect-tooltip rect-tooltip--step-before"
                show={this.state.chart}
                type="step-before"
                pathId="stepBefore"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--step-before"
            onClick={this.handleShowChart}
          >
            Step-before
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default StepBefore;
