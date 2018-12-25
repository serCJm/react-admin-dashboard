import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import SingleLine from "../Charts/SingleLine/SingleLine";
import ContainerDimensions from "react-container-dimensions";

const data1 = [];
for (let i = 0; i <= 20; i++) {
  const number = Math.random() * 35;
  data1.push(number);
}

class TriangleDown extends Component {
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
        <div className="p1 triangle-down">
          <h1 className="mt2">Markers</h1>
          <p className="mb0">Triangle Down</p>
          <ContainerDimensions>
            {({ width }) => (
              <SingleLine
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--triangle-down"
                theme="rgb(45, 137, 239)"
                tooltipClass="rect-tooltip rect-tooltip--triangle-down"
                show={this.state.chart}
                markersPath="M0,5.26429605180997L6.078685485212741,-5.26429605180997 -6.078685485212741,-5.26429605180997Z"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--dark-blue"
            onClick={this.handleShowChart}
          >
            triangle down
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default TriangleDown;
