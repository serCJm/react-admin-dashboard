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
    bars: null,
    xBarScale: d3.scaleLinear().range([0, +this.props.width]),
    yBarScale: d3
      .scaleLinear()
      .range([+this.props.height, +this.props.margin.top]),
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
    const { data, dataVolume } = nextProps;
    const { xScale, yScale, lineGenerator, xBarScale, yBarScale } = prevState;

    // line chart
    xScale.domain([0, d3.max(data, (d, i) => i)]);
    yScale.domain(d3.extent(data, d => d));

    lineGenerator.x((d, i) => xScale(i));
    lineGenerator.y(d => yScale(d));

    const line = lineGenerator(data);

    // bar chart
    xBarScale.domain([0, d3.max(dataVolume, (d, i) => i)]);
    yBarScale.domain(d3.extent(dataVolume, d => d));
    const bars = dataVolume.map((d, i) => {
      return {
        x: xBarScale(i),
        y: yBarScale(d),
        height: nextProps.height - yScale(d),
        width: "2",
        fill: "rgb(54, 74, 84)"
      };
    });
    return { line, bars };
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

    const { xScale, yScale, xBarScale } = { ...this.state };

    const xValue = Math.round(xScale.invert(cursporpt.x));
    const yValue = this.props.data[xValue];

    const xBarValue = Math.round(xBarScale.invert(cursporpt.x));
    const yBarValue = this.props.dataVolume[xBarValue];

    const tooltip = { ...this.state.tooltip };
    tooltip.show = true;
    tooltip.xGraph = xScale(xValue);
    tooltip.yGraph = yScale(yValue);
    tooltip.mouseXAbs = e.clientX;
    tooltip.mouseYAbs = e.clientY;
    tooltip.text1 = `Index: ${Number(yValue).toFixed(2)}`;
    tooltip.text2 = `Volume: ${Number(yBarValue).toFixed(2)}`;
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
          text2={this.state.tooltip.text2}
        />
      );
    }

    const barChart = this.state.bars.map((d, i) => (
      <rect
        key={i}
        x={d.x}
        y={d.y}
        height={d.height}
        width={d.width}
        fill={d.fill}
      />
    ));

    return (
      <div>
        <svg
          ref={this.svg}
          width={this.props.width}
          height={this.props.height}
          onMouseMove={this.handleMouseHover}
          onMouseLeave={this.handleMouseLeave}
        >
          <g>
            {barChart}
            <path d={this.state.line} fill="none" stroke="rgb(192, 96, 56)" />
          </g>
          {tooltipLine}
        </svg>
        {tooltipBox}
      </div>
    );
  }
}

export default DowGraph;
