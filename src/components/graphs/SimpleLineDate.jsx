import React, { Component } from "react";
import * as d3 from "d3";

class SimpleLineDate extends Component {
  state = {
    line: null,
    xScale: d3.scaleTime().range([0, +this.props.width]),
    yScale: d3.scaleLinear().range([+this.props.height, 0]),
    lineGenerator: d3.line()
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale, lineGenerator } = prevState;

    xScale.domain(d3.extent(data, d => d.date));
    yScale.domain([0, d3.max(data, d => d.number)]);

    lineGenerator.x(d => xScale(d.date));
    lineGenerator.y(d => yScale(d.number));
    lineGenerator.curve(d3.curveMonotoneX);

    const line = lineGenerator(data);
    return { line };
  }

  render() {
    return (
      <g>
        <path d={this.state.line} fill="none" stroke={this.props.stroke} />
      </g>
    );
  }
}

export default SimpleLineDate;
