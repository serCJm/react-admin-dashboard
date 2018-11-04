import React, { Component } from "react";
import * as d3 from "d3";

const margin = { top: 20, right: 20, left: 20, bottom: 20 },
  height = 300 - margin.top - margin.bottom;

class DonutChart extends Component {
  width = this.props.width - margin.left - margin.right;
  radius = Math.min(this.width, height) / 2;
  state = {
    slices: null,
    arcGenerator: d3
      .arc()
      .innerRadius(this.radius * 0.6)
      .outerRadius(this.radius - 1),
    arcOverGenerator: d3
      .arc()
      .innerRadius(this.radius * 0.6)
      .outerRadius(this.radius + 15),
    pieGenerator: d3
      .pie()
      .padAngle(0.005)
      .sort(null)
      .value(d => d.value),
    color: d3.scaleOrdinal(),
    hoverIndex: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;

    const {
      arcGenerator,
      arcOverGenerator,
      pieGenerator,
      color,
      hoverIndex
    } = prevState;

    color
      .domain(data.map(d => d.name))
      .range(
        d3
          .quantize(
            d3.interpolateRgb("rgb(202, 94, 48)", "rgb(248, 166, 0)"),
            data.length
          )
          .reverse()
      );

    const arcs = pieGenerator(data);

    const slices = arcs.map((arc, i) => {
      return {
        path:
          hoverIndex !== null && i === hoverIndex
            ? arcOverGenerator(arc)
            : arcGenerator(arc),
        fill: color(arc.data.name),
        name: arc.data.name,
        value: arc.data.value
      };
    });

    return { slices };
  }

  handleMouseEnter = e => {
    const path = e.target;
    const index = +path.getAttribute("data-index");
    this.setState({ hoverIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoverIndex: null });
  };
  render() {
    return (
      <svg
        preserveAspectRatio="xMinYMin meet"
        viewBox={`0 0 ${this.width + margin.left + margin.right} ${height +
          margin.top +
          margin.bottom}`}
      >
        <g
          transform={`translate(${this.props.width / 2}, ${(height +
            margin.top +
            margin.bottom) /
            2})`}
        >
          {this.state.slices.map((slice, i) => (
            <g
              key={i}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <path d={slice.path} fill={slice.fill} data-index={i}>
                <title style={{ fill: "white" }}>{`${slice.name}: ${
                  slice.value
                }`}</title>
              </path>
            </g>
          ))}
        </g>
      </svg>
    );
  }
}

export default DonutChart;
