import React, { Component } from "react";
import * as d3 from "d3";
import TooltipBox from "./tooltips/TooltipBox";
import LineWithCircle from "./tooltips/LineWithCircle";

const margin = { top: 5, right: 20, bottom: 50, left: 40 },
  height = 300 - margin.top - margin.bottom;

class StackedBarChartNegative extends Component {
  width = this.props.width - margin.left - margin.right;
  state = {
    xScale: d3
      .scaleBand()
      .rangeRound([margin.left, this.width])
      .padding(0.2),
    yScale: d3.scaleLinear().rangeRound([height, margin.top]),
    zScale: d3.scaleOrdinal().range(this.props.classNames),
    tooltip: {
      show: false,
      xGraph: null,
      yGraph: null,
      y1: height + margin.top,
      y2: margin.top + 20,
      mouseXAbs: null,
      mouseYAbs: null,
      text1: null,
      text2: null
    }
  };

  xAxisRef = React.createRef();
  yAxisRef = React.createRef();
  yAxisGridRef = React.createRef();
  xAxisGridRef = React.createRef();
  centerAxisRef = React.createRef();
  xAxis = d3.axisBottom(this.state.xScale).tickSizeOuter(0);
  yAxis = d3
    .axisLeft(this.state.yScale)
    .ticks(5)
    .tickSizeOuter(0);
  yAxisGrid = d3
    .axisBottom(this.state.xScale)
    .tickSize(-height + margin.top)
    .tickFormat("")
    .tickSizeOuter(0);
  xAxisGrid = d3
    .axisLeft(this.state.yScale)
    .ticks(5)
    .tickSize(-this.width + margin.left)
    .tickFormat("")
    .tickSizeOuter(0);
  centerAxis = d3
    .axisBottom(d3.scaleIdentity().domain([margin.left, this.width]))
    .ticks(0)
    .tickSizeOuter(0);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;

    const { data } = nextProps;
    const { xScale, yScale, zScale } = prevState;

    const keys = ["male", "female"];

    const dataset = d3
      .stack()
      .keys(keys)
      .offset(d3.stackOffsetDiverging)(data);
    xScale.domain(data.map(d => d.date));
    yScale.domain([
      d3.min(dataset[1], d => d[0]) - 10,
      d3.max(dataset[0], d => d[1]) + 10
    ]);
    zScale.domain(keys);

    const bars = dataset.map(data => {
      return data.map((d, i) => {
        return {
          x: xScale(d.data.date),
          y: yScale(d[1]),
          height:
            d[1] + d[0] >= 0
              ? yScale(0) - yScale(d[1])
              : yScale(d[0]) - yScale(0),
          width: xScale.bandwidth(),
          className: zScale(data.key),
          dataKey: i
        };
      });
    });

    return { bars };
  }

  componentDidMount() {
    d3.select(this.xAxisRef.current).call(this.xAxis);
    d3.select(this.yAxisRef.current).call(this.yAxis);
    d3.select(this.yAxisGridRef.current).call(this.yAxisGrid);
    d3.select(this.xAxisGridRef.current).call(this.xAxisGrid);
    d3.select(this.centerAxisRef.current).call(this.centerAxis);
  }

  handleMouseHover = e => {
    const rect = e.target;

    const { xScale, yScale } = { ...this.state };

    const index = Number(+rect.getAttribute("data-key"));
    const xValue = this.props.data[index].date;
    const yValue1 = this.props.data[index].male.toFixed(1);
    const yValue2 = this.props.data[index].female.toFixed(1);

    const barHalf = Number(rect.getAttribute("width")) / 2;

    const tooltip = { ...this.state.tooltip };
    tooltip.show = true;
    tooltip.xGraph = xScale(xValue) + barHalf;
    tooltip.yGraph = yScale(yValue1);
    tooltip.mouseXAbs = e.clientX;
    tooltip.mouseYAbs = e.clientY;

    tooltip.text1 = `Male: ${yValue1}`;
    tooltip.text2 = `Female: ${Math.abs(yValue2)}`;
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
            left: this.state.tooltip.mouseXAbs + 25,
            top: this.state.tooltip.mouseYAbs - 25
          }}
          text1={this.state.tooltip.text1}
          text2={this.state.tooltip.text2}
          tooltipClass="rect-tooltip"
        />
      );
    }
    let tooltipLine = null;
    if (this.state.tooltip.show) {
      tooltipLine = (
        <LineWithCircle
          tooltip={this.state.tooltip}
          circleRadius="0"
          fill="none"
          lineColor="white"
        />
      );
    }
    return (
      <React.Fragment>
        <svg
          //ref={this.svg}
          // this is a hack to keep svg responsive because ContainerDimensions only re-renders new width prop on reload
          // another approach would be is to force component to update through event listeners
          // however, given the code size, in this case seems to be redundant
          preserveAspectRatio="xMinYMin meet"
          viewBox={`0 0 ${this.width + margin.left + margin.right} ${height +
            margin.top +
            margin.bottom}`}
        >
          <g transform={`translate(0, ${margin.top})`}>
            <g ref={this.xAxisRef} transform={`translate(0, ${height})`} />
            <g ref={this.yAxisRef} transform={`translate(${margin.left}, 0)`} />
            <g
              ref={this.yAxisGridRef}
              className="yAxisGrid"
              transform={`translate(0, ${height})`}
            />
            <g
              ref={this.xAxisGridRef}
              className="xAxisGrid"
              transform={`translate(${margin.left}, 0)`}
            />
            <g>
              {this.state.bars[0].map((d, i) => (
                <g key={i + "male"}>
                  <rect
                    x={d.x}
                    y={d.y}
                    height={d.height}
                    width={d.width}
                    className={d.className}
                    data-key={d.dataKey}
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseLeave}
                  />
                  <path
                    d="M-5.366563145999495,-1.7888543819998317H-1.7888543819998317V-5.366563145999495H1.7888543819998317V-1.7888543819998317H5.366563145999495V1.7888543819998317H1.7888543819998317V5.366563145999495H-1.7888543819998317V1.7888543819998317H-5.366563145999495Z"
                    fill="#2D89EF"
                    stroke="white"
                    transform={`translate(${d.x + d.width / 2}, ${d.y})`}
                  />
                </g>
              ))}
            </g>

            <g>
              {this.state.bars[1].map((d, i) => (
                <g key={i + "female"}>
                  <rect
                    x={d.x}
                    y={d.y}
                    height={d.height}
                    width={d.width}
                    className={d.className}
                    data-key={d.dataKey}
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseLeave}
                    fill="red"
                  />
                  <path
                    d="M0,-7.444838872816797L4.298279727294168,0 0,7.444838872816797 -4.298279727294168,0Z"
                    fill="#FF0097"
                    stroke="white"
                    transform={`translate(${d.x + d.width / 2}, ${d.y +
                      d.height})`}
                  />
                </g>
              ))}
            </g>
            <g
              ref={this.centerAxisRef}
              className="center-axis"
              transform={`translate(0, ${this.state.yScale(0)})`}
            />
          </g>
          {tooltipLine}
        </svg>
        {tooltipBox}
      </React.Fragment>
    );
  }
}

export default StackedBarChartNegative;
