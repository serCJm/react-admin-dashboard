import React, { Component } from "react";
import PageElementWrapper from "../../../../PageElementWrapper";
import ContainerDimensions from "react-container-dimensions";
import Interpolation from "../Charts/Interpolations/Interpolation";

const data1 = [];
for (let i = 0; i <= 20; i++) {
  const number = Math.random() * 35;
  data1.push(number);
}

class Cardinal extends Component {
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
        <div className="p1 cardinal">
          <h1 className="mt2">Cardinal Interpolation</h1>
          <ContainerDimensions>
            {({ width }) => (
              <Interpolation
                data={data1}
                width={width}
                height={250}
                lineStyle="single-line single-line--cardinal"
                theme="rgb(128, 0, 255)"
                tooltipClass="rect-tooltip rect-tooltip--cardinal"
                show={this.state.chart}
                type="cardinal"
                pathId="cardinal"
              />
            )}
          </ContainerDimensions>
          <button
            className="mtb1 btn-toggle-chart btn-toggle-chart--cardinal"
            onClick={this.handleShowChart}
          >
            Cardinal
          </button>
        </div>
      </PageElementWrapper>
    );
  }
}

export default Cardinal;
