import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import SingleLine from "../SingleLine/SingleLine";
import ContainerDimensions from "react-container-dimensions";

const data1 = [];
for (let i = 0; i <= 100; i++) {
  const number = Math.random() * 90;
  data1.push(number);
}

class NoMarkers extends Component {
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
      <div className="line-series">
        <PageElementWrapper>
          <div className="p1 no-markers">
            <h1 className="mt2">Single Line Chart</h1>
            <p className="mb0">No markers</p>
            <ContainerDimensions>
              {({ width }) => (
                <SingleLine
                  data={data1}
                  width={width}
                  height={250}
                  lineStyle="single-line-no-markers"
                  show={this.state.chart}
                />
              )}
            </ContainerDimensions>
            <button
              className="mtb1 btn-toggle-chart btn-toggle-chart--blue"
              onClick={this.handleShowChart}
            >
              Series A
            </button>
          </div>
        </PageElementWrapper>
      </div>
    );
  }
}

export default NoMarkers;
