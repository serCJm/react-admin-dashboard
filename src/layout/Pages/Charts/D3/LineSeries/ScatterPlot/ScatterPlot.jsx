import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import ScatterPlot from "../Charts/ScatterPlot/ScatterPlot";
import ContainerDimensions from "react-container-dimensions";

const data = [];
for (let i = 0; i <= 330; i++) {
  const number = Math.random() * 300;
  data.push(number);
}
for (let i = 0; i <= 330; i++) {
  const number = Math.random() * (600 - 300) + 300;
  data.push(number);
}
for (let i = 0; i <= 340; i++) {
  const number = Math.random() * (1000 - 600 + 1) + 600;
  data.push(number);
}

class ScatterPlot1000 extends Component {
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
        <div className="p1 scatter1000">
          <h1 className="mt2">Scatter Plot</h1>
          <p className="mb0">Rendering 1,000 points</p>
          <ContainerDimensions>
            {({ width }) => (
              <ScatterPlot
                data={data}
                width={width}
                height={250}
                pointStyle="scatterplot1000"
                theme="rgb(70, 130, 180)"
                tooltipClass="rect-tooltip rect-tooltip--scatter1000"
                show={this.state.chart}
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--steelblue"
            onClick={this.handleShowChart}
          >
            Scatter
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default ScatterPlot1000;
