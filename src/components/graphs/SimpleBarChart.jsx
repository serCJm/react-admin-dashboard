import React, { Component } from "react";
import * as d3 from "d3";

class SimpleBarChart extends Component {
  state = {
    bars: [],
    xScale: d3
      .scaleBand()
      .rangeRound([0, this.props.width])
      .padding(0.1),
    yScale: d3
      .scaleLinear()
      .rangeRound(this.props.height, this.props.margin.top)
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
        className:
          d >= 0 ? nextProps.classNames.bar2 : nextProps.classNames.bar1
      };
    });
    return { bars };
  }

  render() {
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
          />
        ))}
      </svg>
    );
  }
}

export default SimpleBarChart;
