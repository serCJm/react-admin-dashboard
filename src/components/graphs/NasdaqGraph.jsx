import React, { Component } from "react";
import * as d3 from "d3";
import LineWithCircle from "./tooltips/LineWithCircle";

class NasdaqGraph extends Component {
  state = {
    line: null,
    xScale: d3.scaleLinear().range([0, +this.props.width]),
    yScale: d3
      .scaleLinear()
      .range([+this.props.height, +this.props.margin.top]),
    lineGenerator: d3.line(),
    tooltip: {
      show: false,
      width: 50,
      y1: +this.props.height,
      y2: this.props.margin.top
    }
  };

  svg = React.createRef();
  pt = null;

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale, lineGenerator } = prevState;

    xScale.domain([0, d3.max(data, (d, i) => i)]);
    yScale.domain(d3.extent(data, d => d));

    lineGenerator.x((d, i) => xScale(i));
    lineGenerator.y(d => yScale(d));

    const line = lineGenerator(data);
    return { line };
  }

  componentDidMount() {
    this.pt = this.svg.current.createSVGPoint();
  }

  handleMouseHover = e => {
    // get mouse coordinates
    this.pt.x = e.clientX;
    this.pt.y = e.clientY;

    // mouse coordinates relative to svg
    const cursporpt = this.pt.matrixTransform(
      this.svg.current.getScreenCTM().inverse()
    );

    const { xScale, yScale } = { ...this.state };

    const xValue = Math.round(xScale.invert(cursporpt.x));
    const yValue = this.props.data[xValue];

    const tooltipCoords = { ...this.state.tooltip };
    tooltipCoords.show = true;
    tooltipCoords.x1 = xScale(xValue);
    tooltipCoords.yExact = yScale(yValue);
    tooltipCoords.mouseY = cursporpt.y;
    tooltipCoords.yValue = Number(yValue).toFixed(2);
    this.setState({ tooltip: tooltipCoords });
  };

  handleMouseLeave = () => {
    const tooltip = { ...this.state.tooltip };
    tooltip.show = !tooltip.show;
    this.setState({ tooltip: tooltip });
  };

  render() {
    let tooltip = null;
    if (this.state.tooltip.show) {
      tooltip = <LineWithCircle tooltip={this.state.tooltip} />;
    }
    return (
      <svg
        ref={this.svg}
        width={this.props.width}
        height={this.props.height}
        onMouseMove={this.handleMouseHover}
        onMouseLeave={this.handleMouseLeave}
      >
        <path d={this.state.line} fill="none" stroke="green" />
        {tooltip}
      </svg>
    );
  }
}

export default NasdaqGraph;
