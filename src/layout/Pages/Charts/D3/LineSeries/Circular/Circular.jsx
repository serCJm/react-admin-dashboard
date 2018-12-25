import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import SingleLine from "../Charts/SingleLine/SingleLine";
import ContainerDimensions from "react-container-dimensions";

const data1 = [];
for (let i = 0; i <= 20; i++) {
  const number = Math.random() * 35;
  data1.push(number);
}

class Circular extends Component {
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
        <div className="p1 circular">
          <h1 className="mt2">Markers</h1>
          <p className="mb0">Circular</p>
          <ContainerDimensions>
            {({ width }) => (
              <SingleLine
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--circular"
                theme="green"
                tooltipClass="rect-tooltip rect-tooltip--circular"
                show={this.state.chart}
                markersPath="M0,4.51351666838205A4.51351666838205,4.51351666838205 0 1,1 0,-4.51351666838205A4.51351666838205,4.51351666838205 0 1,1 0,4.51351666838205Z"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--green"
            onClick={this.handleShowChart}
          >
            circle
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default Circular;
