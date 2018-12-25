import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import SingleLine from "../Charts/SingleLine/SingleLine";
import ContainerDimensions from "react-container-dimensions";

const data1 = [];
for (let i = 0; i <= 20; i++) {
  const number = Math.random() * 35;
  data1.push(number);
}

class Square extends Component {
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
        <div className="p1 square">
          <h1 className="mt2">Markers</h1>
          <p className="mb0">Square shaped</p>
          <ContainerDimensions>
            {({ width }) => (
              <SingleLine
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--square"
                theme="rgb(218, 83, 44)"
                tooltipClass="rect-tooltip rect-tooltip--square"
                show={this.state.chart}
                markersPath="M-4,-4L4,-4 4,4 -4,4Z"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--red"
            onClick={this.handleShowChart}
          >
            square
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default Square;
