import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import SingleLine from "../Charts/SingleLine/SingleLine";
import ContainerDimensions from "react-container-dimensions";

const data1 = [];
for (let i = 0; i <= 20; i++) {
  const number = Math.random() * 35;
  data1.push(number);
}

class Diamond extends Component {
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
        <div className="p1 diamond">
          <h1 className="mt2">Markers</h1>
          <p className="mb0">Diamond shaped</p>
          <ContainerDimensions>
            {({ width }) => (
              <SingleLine
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--diamond"
                theme="rgb(0, 171, 169)"
                tooltipClass="rect-tooltip rect-tooltip--diamond"
                show={this.state.chart}
                markersPath="M0,-7.444838872816797L4.298279727294168,0 0,7.444838872816797 -4.298279727294168,0Z"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--ocean"
            onClick={this.handleShowChart}
          >
            diamond
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default Diamond;
