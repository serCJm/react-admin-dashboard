import React, { Component } from "react";
import * as d3 from "d3";

// component based on // based on https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172

const margin = { top: 20, right: 20, bottom: 110, left: 40 },
  margin2 = { top: 430, right: 10, bottom: 20, left: 40 },
  height = 500 - margin.top - margin.bottom,
  height2 = 500 - margin2.top - margin2.bottom;

class InteractiveChart extends Component {
  // move into component to make it dynamic using ContainerDimensions on parent
  width = this.props.width - margin.left - margin.right;
  state = {
    width: this.width,
    area: null,
    area2: null,
    xScale: d3.scaleTime().range([0, this.width]),
    xScale2: d3.scaleTime().range([0, this.width]),
    yScale: d3.scaleLinear().range([height, 0]),
    yScale2: d3.scaleLinear().range([height2, 0]),
    areaGenerator: d3.area()
  };

  xAxisRef = React.createRef();
  xAxis2Ref = React.createRef();
  yAxisRef = React.createRef();
  yAxisGridRef = React.createRef();
  brushArea = React.createRef();

  brush = d3
    .brushX()
    .extent([[0, 0], [this.width, height2]])
    .on(
      "brush end",
      function brushed() {
        const s = d3.event.selection || this.state.xScale2.range();

        const { xScale, yScale, xScale2, areaGenerator } = this.state;

        xScale.domain(s.map(xScale2.invert, xScale2));

        areaGenerator
          .x(function(d) {
            return xScale(d.date);
          })
          .y0(height)
          .y1(function(d) {
            return yScale(d.number);
          });

        const area = areaGenerator(this.props.data);

        d3.select(".area").attr("d", area);
        d3.select(".x-axis").call(this.xAxis);
        d3.select(".y-axis-grid").call(
          d3
            .axisBottom(this.state.xScale)
            .tickSize(-height)
            .tickFormat("")
        );
      }.bind(this)
    );

  xAxis = d3.axisBottom(this.state.xScale).tickSizeOuter(0);
  // axis for slider
  xAxis2 = d3.axisBottom(this.state.xScale2);
  yAxis = d3
    .axisLeft(this.state.yScale)
    .tickValues(d3.range(10, 100, 10))
    .tickSizeOuter(0);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;

    const { data } = nextProps;
    const parseDate = d3.timeParse("%b %Y");
    data.forEach(d => parseDate(d.date));

    const { xScale, xScale2, yScale, yScale2, areaGenerator } = prevState;

    xScale.domain(d3.extent(data, d => d.date));
    yScale.domain([0, d3.max(data, d => d.number)]);
    xScale2.domain(xScale.domain()); // Setting a duplicate xdomain for brushing reference later
    yScale2.domain(yScale.domain());

    areaGenerator
      .x(function(d) {
        return xScale(d.date);
      })
      .y0(height)
      .y1(function(d) {
        return yScale(d.number);
      });

    const area = areaGenerator(data);
    areaGenerator
      .curve(d3.curveMonotoneX)
      .x(function(d) {
        return xScale2(d.date);
      })
      .y0(height2)
      .y1(function(d) {
        return yScale2(d.number);
      });

    const area2 = areaGenerator(data);

    return { area, area2 };
  }

  componentDidMount() {
    d3.select(this.xAxisRef.current).call(this.xAxis);
    d3.select(this.yAxisRef.current).call(this.yAxis);
    d3.select(this.yAxisGridRef.current).call(
      d3
        .axisBottom(this.state.xScale)
        .tickSize(-height, 0, 0)
        .tickFormat("")
    );
    d3.select(this.xAxis2Ref.current).call(this.xAxis2);
    d3.select(this.brushArea.current)
      .call(this.brush)
      .call(this.brush.move, this.state.xScale.range());
  }

  componentWillUnmount() {
    d3.brushX().on("brush end", null);
  }

  render() {
    return (
      <svg
        // this is a hack to keep svg responsive because ContainerDimensions only re-renders new width prop on reload
        // another approach would be is to force component to update through event listeners
        // however, given the code size, in this case seems to be redundant
        preserveAspectRatio="xMinYMin meet"
        viewBox={`0 0 ${this.width + margin.left + margin.right} ${height +
          margin.top +
          margin.bottom}`}
      >
        <defs>
          <clipPath id="clip">
            <rect width={this.width} height={height} />
          </clipPath>
        </defs>
        <g
          className="focus"
          transform={`translate( ${margin.left} , ${margin.top} )`}
        >
          <path
            className="area"
            d={this.state.area}
            fill="rgba(0, 0, 255, .4)"
          />
          <g
            ref={this.xAxisRef}
            className="x-axis"
            transform={`translate(0, ${height})`}
          />
          <g ref={this.yAxisRef} className="y-axis" />
          <g
            ref={this.yAxisGridRef}
            className="y-axis y-axis-grid"
            transform={`translate(0, ${height})`}
          />
        </g>
        <g
          className="context"
          transform={`translate( ${margin2.left} , ${margin2.top} )`}
        >
          <path d={this.state.area2} fill="rgba(0, 0, 255, .4)" />
          <g ref={this.xAxis2Ref} transform={`translate(0, ${height2})`} />
          <g ref={this.brushArea} className="brush" />
        </g>
      </svg>
    );
  }
}

export default InteractiveChart;
