import React, { Component } from "react";
import * as d3 from "d3";
import TooltipBox from "./tooltips/TooltipBox";
import LineWithCircle from "./tooltips/LineWithCircle";

class SimpleBarChart extends Component {
  state = {
    bars: [],
    xScale: d3
      .scaleBand()
      .rangeRound([0, this.props.width - this.props.margin.right])
      .padding(0.1),
    yScale: d3
      .scaleLinear()
      .rangeRound([+this.props.height, +this.props.margin.top]),

    tooltip: {
      show: false,
      xGraph: null,
      yGraph: null,
      y1: +this.props.height,
      y2: 0,
      mouseXAbs: null,
      mouseYAbs: null,
      text1: null,
      text2: null
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale } = prevState;

    if (nextProps.paddingInner) {
      xScale.paddingInner(0.5);
    }

    xScale.domain(data.map((d, i) => i.toString()));
    yScale.domain([0, d3.max(data, d => Math.abs(d))]);

    const bars = data.map((d, i) => {
      return {
        x: xScale(i.toString()),
        y: yScale(Math.abs(d)),
        height: nextProps.height - yScale(Math.abs(d)),
        width: xScale.bandwidth(),
        dataKey: i,
        dataValue: d,
        className:
          d >= 0 ? nextProps.classNames.bar2 : nextProps.classNames.bar1
      };
    });
    return { bars };
  }

  handleMouseHover = e => {
    const rect = e.target;

    const { xScale, yScale } = { ...this.state };

    const xValue = Number(+rect.getAttribute("data-key"));
    const yValue = this.props.data[xValue].toFixed(1);

    const barHalf = Number(+rect.getAttribute("width")) / 2;

    const tooltip = { ...this.state.tooltip };
    tooltip.show = true;
    tooltip.xGraph = xScale(xValue) + barHalf;
    tooltip.yGraph = yScale(yValue);
    tooltip.mouseXAbs = e.clientX;
    tooltip.mouseYAbs = e.clientY;
    tooltip.text1 = yValue;
    this.setState({ tooltip: tooltip });
  };

  handleMouseLeave = () => {
    const tooltip = { ...this.state.tooltip };
    tooltip.show = false;
    this.setState({ tooltip: tooltip });
  };

  render() {
    let tooltipBox = null;
    if (this.state.tooltip.show) {
      tooltipBox = (
        <TooltipBox
          position={{
            left: this.state.tooltip.mouseXAbs + 15,
            top: this.state.tooltip.mouseYAbs - 15
          }}
          text1={this.state.tooltip.text1}
          text2={this.state.tooltip.text2}
          tooltipClass={this.props.tooltipClass}
        />
      );
    }
    let tooltipLine = null;
    if (this.state.tooltip.show && this.props.lineWithCircle) {
      tooltipLine = <LineWithCircle tooltip={this.state.tooltip} />;
    }
    return (
      <React.Fragment>
        <svg width={this.props.width} height={this.props.height}>
          {this.state.bars.map((d, i) => (
            <rect
              key={i}
              x={d.x}
              y={d.y}
              height={d.height}
              width={d.width}
              className={d.className}
              data-key={d.dataKey}
              data-value={d.dataValue}
              onMouseEnter={this.handleMouseHover}
              onMouseLeave={this.handleMouseLeave}
            />
          ))}
          {tooltipLine}
        </svg>
        {tooltipBox}
      </React.Fragment>
    );
  }
}

export default SimpleBarChart;
