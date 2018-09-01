import React, { Component } from "react";
import * as d3 from "d3";
import RectInfoBox from "./tooltips/RectInfoBox";

class SimpleBarChart extends Component {
  state = {
    bars: [],
    xScale: d3
      .scaleBand()
      .rangeRound([0, this.props.width - this.props.margin.right])
      .padding(0.1),
    yScale: d3
      .scaleLinear()
      .rangeRound(this.props.height, this.props.margin.top),

    tooltip: {
      show: false
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale } = prevState;

    xScale.domain(data.map((d, i) => i.toString()));
    yScale.domain([0, d3.max(data, d => d)]);

    const bars = data.map((d, i) => {
      return {
        x: xScale(i.toString()),
        y: yScale(d),
        height: nextProps.height - yScale(d),
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
    this.setState(prevState => {
      return {
        tooltip: {
          show: !prevState.tooltip.show,
          x1: +rect.getAttribute("x") - 3,
          mouseY: +rect.getAttribute("y") + 22,
          yValue: Number(+rect.getAttribute("data-value")).toFixed(1)
        }
      };
    });
  };

  handleMouseLeave = () => {
    const tooltip = { ...this.state.tooltip };
    tooltip.show = false;
    this.setState({ tooltip: tooltip });
  };

  render() {
    let tooltip = null;
    if (this.state.tooltip.show) {
      tooltip = <RectInfoBox tooltip={this.state.tooltip} />;
    }
    return (
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
        {tooltip}
      </svg>
    );
  }
}

export default SimpleBarChart;
