import React, { Component } from "react";
import * as d3 from "d3";

class AreaLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: null,
      line: null,
      xScale: d3.scaleLinear().range([0, +this.props.width]),
      yScale: d3
        .scaleLinear()
        .range([+this.props.height, this.props.margin.top]),
      areaGenerator: d3.area(),
      lineGenerator: d3.line()
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale, areaGenerator, lineGenerator } = prevState;
    areaGenerator.x((d, i) => xScale(i)).y1(d => yScale(d));

    xScale.domain([0, d3.max(data, (d, i) => i)]);
    yScale.domain([0, d3.max(data, d => d)]);
    areaGenerator.y0(yScale(0));

    lineGenerator.x((d, i) => xScale(i));
    lineGenerator.y(d => yScale(d));

    const area = areaGenerator(data);
    const line = lineGenerator(data);
    return { area, line };
  }
  render() {
    console.log(this.state.area);
    return (
      <svg width={this.props.width} height={this.props.height}>
        <g>
          <path d={this.state.area} fill="rgba(0, 0, 255, .4)" />
          <path d={this.state.line} fill="none" stroke="rgb(0, 0, 255)" />
        </g>
      </svg>
    );
  }
}

export default AreaLineChart;
