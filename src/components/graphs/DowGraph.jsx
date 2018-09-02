import React, { Component } from "react";
import * as d3 from "d3";
import LineWithCircle from "./tooltips/LineWithCircle";
import TooltipBox from "./tooltips/TooltipBox";

class DowGraph extends Component {
  state = {
    line: null,
    xScale: d3.scaleLinear().range([0, +this.props.width]),
    yScale: d3
      .scaleLinear()
      .range([+this.props.height, +this.props.margin.top]),
    lineGenerator: d3.line(),
    tooltip: {
      show: false,
      xGraph: null,
      yGraph: null,
      y1: +this.props.height,
      y2: this.props.margin.top,
      mouseXAbs: null,
      mouseYAbs: null,
      text1: null,
      text2: null
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

    const tooltip = { ...this.state.tooltip };
    tooltip.show = true;
    tooltip.xGraph = xScale(xValue);
    tooltip.yGraph = yScale(yValue);
    tooltip.mouseXAbs = e.clientX;
    tooltip.mouseYAbs = e.clientY;
    tooltip.text1 = `Index: ${Number(yValue).toFixed(2)}`;
    this.setState({ tooltip: tooltip });
  };

  handleMouseLeave = () => {
    const tooltip = { ...this.state.tooltip };
    tooltip.show = !tooltip.show;
    this.setState({ tooltip: tooltip });
  };

  render() {
    let tooltipLine = null,
      tooltipBox = null;

    if (this.state.tooltip.show) {
      tooltipLine = <LineWithCircle tooltip={this.state.tooltip} />;
      tooltipBox = (
        <TooltipBox
          position={{
            left: this.state.tooltip.mouseXAbs + 15,
            top: this.state.tooltip.mouseYAbs - 15
          }}
          text1={this.state.tooltip.text1}
        />
      );
    }
    return (
      <div>
        <svg
          ref={this.svg}
          width={this.props.width}
          height={this.props.height}
          onMouseMove={this.handleMouseHover}
          onMouseLeave={this.handleMouseLeave}
        >
          <path d={this.state.line} fill="none" stroke="rgb(192, 96, 56)" />
          {tooltipLine}
        </svg>
        {tooltipBox}
      </div>
    );
  }
}

export default DowGraph;
