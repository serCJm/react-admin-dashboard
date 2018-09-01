import React, { Component } from "react";
import * as d3 from "d3";
import LineWithCircle from "./tooltips/LineWithCircle";

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
      lineGenerator: d3.line(),
      tooltip: {
        show: false,
        y1: +this.props.height,
        y2: this.props.margin.top
      }
    };

    this.svg = React.createRef();
    this.pt = null;

    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale, areaGenerator, lineGenerator } = prevState;

    xScale.domain([0, d3.max(data, (d, i) => i)]);
    yScale.domain([0, d3.max(data, d => d)]);

    areaGenerator.x((d, i) => xScale(i)).y1(d => yScale(d));
    areaGenerator.y0(yScale(0));

    lineGenerator.x((d, i) => xScale(i));
    lineGenerator.y(d => yScale(d));

    const area = areaGenerator(data);
    const line = lineGenerator(data);
    return { area, line };
  }

  componentDidMount() {
    this.pt = this.svg.current.createSVGPoint();
  }

  handleMouseHover(e) {
    // get mouse coordinates
    this.pt.x = e.clientX;
    this.pt.y = e.clientY;

    // mouse coordinates relative to svg
    const cursporpt = this.pt.matrixTransform(
      this.svg.current.getScreenCTM().inverse()
    );

    const { xScale, yScale } = { ...this.state };

    const xValue = Math.floor(xScale.invert(cursporpt.x));
    const yValue = this.props.data[xValue];

    const tooltipCoords = { ...this.state.tooltip };
    tooltipCoords.show = true;
    tooltipCoords.x1 = xScale(xValue);
    tooltipCoords.x2 = xScale(xValue);
    tooltipCoords.yExact = yScale(yValue);
    tooltipCoords.mouseY = cursporpt.y;
    tooltipCoords.yValue = yValue;
    this.setState({ tooltip: tooltipCoords });
  }

  handleMouseLeave() {
    const tooltip = { ...this.state.tooltip };
    tooltip.show = !tooltip.show;
    this.setState({ tooltip: tooltip });
  }

  render() {
    let tooltip = null;
    if (this.state.tooltip.show) {
      tooltip = <LineWithCircle tooltip={this.state.tooltip} />;
    }

    return (
      <svg ref={this.svg} width={this.props.width} height={this.props.height}>
        <g
          onMouseMove={this.handleMouseHover}
          onMouseLeave={this.handleMouseLeave}
        >
          <path d={this.state.area} fill="rgba(0, 0, 255, .4)" />
          <path d={this.state.line} fill="none" stroke="rgb(0, 0, 255)" />
        </g>
        {tooltip}
      </svg>
    );
  }
}

export default AreaLineChart;
