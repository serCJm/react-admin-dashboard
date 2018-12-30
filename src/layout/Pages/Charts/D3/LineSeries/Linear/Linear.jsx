import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import ContainerDimensions from "react-container-dimensions";
import Interpolation from "../Charts/Interpolations/Interpolation";

const data1 = [];
for (let i = 0; i <= 20; i++) {
  const number = Math.random() * 35;
  data1.push(number);
}

class Linear extends Component {
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
        <div className="p1 linear">
          <h1 className="mt2">Linear Interpolation</h1>
          <ContainerDimensions>
            {({ width }) => (
              <Interpolation
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--linear"
                theme="rgb(128, 64, 0)"
                tooltipClass="rect-tooltip rect-tooltip--linear"
                show={this.state.chart}
                type="linear"
                pathId="linear"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--linear"
            onClick={this.handleShowChart}
          >
            Linear
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default Linear;
