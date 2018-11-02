import React, { Component } from "react";
import * as d3 from "d3";
import TooltipBox from "./tooltips/TooltipBox";
import LineWithCircle from "./tooltips/LineWithCircle";

const margin = { top: 5, right: 20, bottom: 50, left: 40 },
  height = 300 - margin.top - margin.bottom;

class PhoneComparisonGraph extends Component {
  width = this.props.width - margin.left - margin.right;
  state = {
    xScale: d3
      .scaleBand()
      .rangeRound([0, this.props.width])
      .padding(0.1),
    yScale: d3.scaleLinear().rangeRound([height, margin.top]),
    zScale: d3.scaleOrdinal().range(this.props.classNames),
    tooltip: {
      show: false,
      xGraph: null,
      yGraph: null,
      y1: height + margin.top,
      y2: margin.top,
      mouseXAbs: null,
      mouseYAbs: null,
      text1: null,
      text2: null
    }
  };

  xAxisRef = React.createRef();

  xAxis = d3.axisBottom(this.state.xScale).tickSizeOuter(0);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;

    const { data } = nextProps;
    const { xScale, yScale, zScale } = prevState;

    const keys = ["android", "apple"];

    const dataset = d3.stack().keys(keys)(data);
    xScale.domain(data.map(d => d.date));
    yScale.domain([0, d3.max(dataset[1], d => d[1])]);
    zScale.domain(keys);

    const bars = dataset.map(data => {
      return data.map((d, i) => {
        return {
          x: xScale(d.data.date),
          y: yScale(d[1]),
          height: height - yScale(d[1] - d[0]),
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
  }

  handleMouseHover = e => {
    const rect = e.target;

    const { xScale, yScale } = { ...this.state };

    const index = Number(+rect.getAttribute("data-key"));
    const xValue = this.props.data[index].date;
    const yValue1 = this.props.data[index].android.toFixed(1);
    const yValue2 = this.props.data[index].apple.toFixed(1);

    const barHalf = Number(rect.getAttribute("width")) / 2;

    const tooltip = { ...this.state.tooltip };
    tooltip.show = true;
    tooltip.xGraph = xScale(xValue) + barHalf;
    tooltip.yGraph = yScale(yValue1);
    tooltip.mouseXAbs = e.clientX;
    tooltip.mouseYAbs = e.clientY;

    tooltip.text1 = `Android: ${Math.abs(yValue1)}`;
    tooltip.text2 = `Apple: ${Math.abs(yValue2)}`;
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

            <g>
              {this.state.bars[0].map((d, i) => (
                <g key={i + "android"}>
                  <rect
                    x={d.x}
                    y={d.y}
                    height={d.height}
                    width={d.width - 2}
                    className={d.className}
                    data-key={d.dataKey}
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseLeave}
                  />
                </g>
              ))}
            </g>

            <g>
              {this.state.bars[1].map((d, i) => (
                <g key={i + "apple"}>
                  <rect
                    x={d.x}
                    y={d.y}
                    height={d.height}
                    width={d.width}
                    className={d.className}
                    data-key={d.dataKey}
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseLeave}
                    stroke="white"
                    strokeWidth={2}
                  />
                </g>
              ))}
            </g>
          </g>
          {tooltipLine}
        </svg>
        {tooltipBox}
      </React.Fragment>
    );
  }
}

export default PhoneComparisonGraph;
