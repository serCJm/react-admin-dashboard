import React, { PureComponent } from "react";
import * as d3 from "d3";
import LineWithCircle from "../../../../../../components/graphs/tooltips/LineWithCircle";
import TooltipBox from "../../../../../../components/graphs/tooltips/TooltipBox";

const margin = { top: 20, bottom: 20, left: 50, right: 50 };

class SingleLine extends PureComponent {
  width = this.props.width - margin.left - margin.right;
  height = this.props.height - margin.top - margin.bottom;
  state = {
    line: null,
    xScale: d3.scaleLinear().range([0, this.width]),
    yScale: d3.scaleLinear().range([this.height, 0]),
    lineGenerator: d3.line(),
    tooltip: {
      show: false,
      xGraph: null,
      yGraph: null,
      y1: this.height,
      y2: 0,
      mouseXAbs: null,
      mouseYAbs: null,
      text1: null,
      text2: null
    }
  };

  svg = React.createRef();
  pt = null;

  xAxisRef = React.createRef();
  yAxisRef = React.createRef();
  xAxisGridRef = React.createRef();
  yAxisGridRef = React.createRef();
  xAxisNoDisplayRef = React.createRef();
  yAxisNoDisplayRef = React.createRef();

  xAxis = d3
    .axisBottom(this.state.xScale)
    .tickValues(d3.range(10, d3.max(this.props.data, (d, i) => i), 10));
  yAxis = d3
    .axisLeft(this.state.yScale)
    .tickValues(d3.range(10, d3.max(this.props.data, d => d), 10));
  xAxisNoDisplay = d3.axisBottom(this.state.xScale).tickValues([]);
  yAxisNoDisplay = d3.axisLeft(this.state.yScale).tickValues([]);
  xAxisGrid = d3
    .axisLeft(this.state.yScale)
    .tickSize(-this.width)
    .ticks(9)
    .tickFormat("");
  yAxisGrid = d3
    .axisBottom(this.state.xScale)
    .tickSize(-this.height)
    .ticks(5)
    .tickFormat("");

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale, lineGenerator } = prevState;

    xScale.domain([0, d3.max(data, (d, i) => i)]);
    yScale.domain([0, d3.max(data, d => d)]);

    lineGenerator.x((d, i) => xScale(i));
    lineGenerator.y(d => yScale(d));

    const line = lineGenerator(data);
    return { line };
  }

  componentDidMount() {
    d3.select(this.xAxisRef.current).call(this.xAxis);
    d3.select(this.yAxisRef.current).call(this.yAxis);
    d3.select(this.xAxisGridRef.current).call(this.xAxisGrid);
    d3.select(this.yAxisGridRef.current).call(this.yAxisGrid);

    this.pt = this.svg.current.createSVGPoint();
  }

  componentDidUpdate() {
    if (this.props.show) {
      d3.select(this.xAxisRef.current).call(this.xAxis);
      d3.select(this.yAxisRef.current).call(this.yAxis);
      d3.select(this.xAxisGridRef.current).call(this.xAxisGrid);
      d3.select(this.yAxisGridRef.current).call(this.yAxisGrid);

      this.pt = this.svg.current.createSVGPoint();
    } else {
      d3.select(this.xAxisNoDisplayRef.current).call(this.xAxisNoDisplay);
      d3.select(this.yAxisNoDisplayRef.current).call(this.yAxisNoDisplay);
    }
  }

  handleMouseHover = e => {
    // get mouse coordinates
    this.pt.x = e.clientX;

    // mouse coordinates relative to svg
    const cursporpt = this.pt.matrixTransform(
      this.svg.current.getScreenCTM().inverse()
    );

    if (
      cursporpt.x >= margin.left &&
      cursporpt.x <= this.props.width - margin.right
    ) {
      const { xScale, yScale } = { ...this.state };

      const xValue = Math.round(xScale.invert(cursporpt.x - margin.left));
      const yValue = this.props.data[xValue];

      const tooltip = { ...this.state.tooltip };
      tooltip.show = true;
      tooltip.xGraph = xScale(xValue);
      tooltip.yGraph = yScale(yValue);
      tooltip.mouseXAbs = e.clientX;
      tooltip.mouseYAbs = e.clientY;
      tooltip.text1 = "x: " + xValue;
      tooltip.text2 = "y: " + yValue.toFixed(2);
      this.setState({ tooltip: tooltip });
    }
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
          tooltipClass={this.props.tooltipClass}
        />
      );
    }
    let tooltipLine = null;
    if (this.state.tooltip.show) {
      tooltipLine = (
        <LineWithCircle
          tooltip={this.state.tooltip}
          circleRadius="6"
          circleFill={this.props.theme}
          circleStroke="white"
          circleStrokeWidth="2"
          lineColor="rgb(192, 208, 224)"
        />
      );
    }

    let markers = null;
    if (this.props.markersPath) {
      markers = (
        <g>
          {this.props.data.map((d, i) => (
            <path
              key={i}
              d={this.props.markersPath}
              transform={`translate(${this.state.xScale(
                i
              )}, ${this.state.yScale(d)})`}
              fill={this.props.theme}
              stroke="white"
              strokeWidth="2"
            />
          ))}
        </g>
      );
    }

    let chart = (
      <React.Fragment>
        <svg
          ref={this.svg}
          preserveAspectRatio="xMinYMin meet"
          viewBox={`0 0 ${this.width + margin.left + margin.right} ${this
            .height +
            margin.top +
            margin.bottom}`}
          onMouseMove={this.handleMouseHover}
          onMouseLeave={this.handleMouseLeave}
        >
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <g className="grid">
              <g ref={this.xAxisGridRef} />
              <g
                ref={this.yAxisGridRef}
                transform={`translate(0, ${this.height})`}
              />
            </g>

            <path
              d={this.state.line}
              fill="none"
              className={this.props.lineStyle}
            />

            <g className="axis">
              <g
                ref={this.xAxisRef}
                transform={`translate(0, ${this.height})`}
              />
              <g ref={this.yAxisRef} />
            </g>
            <g className="markers">{markers}</g>
            {tooltipLine}
          </g>
        </svg>
        {tooltipBox}
      </React.Fragment>
    );
    if (!this.props.show) {
      chart = (
        <svg
          ref={this.svg}
          preserveAspectRatio="xMinYMin meet"
          viewBox={`0 0 ${this.width + margin.left + margin.right} ${this
            .height +
            margin.top +
            margin.bottom}`}
        >
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <g className="axis">
              <g
                ref={this.xAxisNoDisplayRef}
                transform={`translate(0, ${this.height})`}
              />
              <g ref={this.yAxisNoDisplayRef} />
            </g>
          </g>
        </svg>
      );
    }
    return chart;
  }
}

export default SingleLine;
