import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import SingleLine from "../Charts/SingleLine/SingleLine";
import ContainerDimensions from "react-container-dimensions";

const data1 = [];
for (let i = 0; i <= 20; i++) {
  const number = Math.random() * 35;
  data1.push(number);
}

class Cross extends Component {
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
        <div className="p1 cross">
          <h1 className="mt2">Markers</h1>
          <p className="mb0">Cross shaped</p>
          <ContainerDimensions>
            {({ width }) => (
              <SingleLine
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--cross"
                theme="rgb(159, 0, 167)"
                tooltipClass="rect-tooltip rect-tooltip--cross"
                show={this.state.chart}
                markersPath="M-5.366563145999495,-1.7888543819998317H-1.7888543819998317V-5.366563145999495H1.7888543819998317V-1.7888543819998317H5.366563145999495V1.7888543819998317H1.7888543819998317V5.366563145999495H-1.7888543819998317V1.7888543819998317H-5.366563145999495Z"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--purple"
            onClick={this.handleShowChart}
          >
            cross
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default Cross;
