import React, { Component } from "react";
import * as d3 from "d3";

class SimpleLine extends Component {
  state = {
    line: null,
    xScale: d3.scaleLinear().range([0, +this.props.width]),
    yScale: d3
      .scaleLinear()
      .range([+this.props.height, +this.props.margin.top]),
    lineGenerator: d3.line()
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale, lineGenerator } = prevState;

    xScale.domain([0, d3.max(data, (d, i) => i)]);
    yScale.domain([0, d3.max(data, d => d)]);

    lineGenerator.x((d, i) => xScale(i));
    lineGenerator.y(d => yScale(d));

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

export default SimpleLine;
