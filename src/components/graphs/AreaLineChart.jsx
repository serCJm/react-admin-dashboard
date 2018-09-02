import React, { Component } from "react";
import * as d3 from "d3";
import LineWithCircle from "./tooltips/LineWithCircle";
import SimpleLine from "./SimpleLine";
import TooltipBox from "./tooltips/TooltipBox";

class AreaLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: null,
      xScale: d3.scaleLinear().range([0, +this.props.width]),
      yScale: d3
        .scaleLinear()
        .range([+this.props.height, this.props.margin.top]),
      areaGenerator: d3.area(),
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

    this.svg = React.createRef();
    this.pt = null;

    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale, areaGenerator } = prevState;

    xScale.domain([0, d3.max(data, (d, i) => i)]);
    yScale.domain([0, d3.max(data, d => d)]);

    areaGenerator.x((d, i) => xScale(i)).y1(d => yScale(d));
    areaGenerator.y0(yScale(0));

    const area = areaGenerator(data);
    return { area };
  }

  componentDidMount() {
    this.pt = this.svg.current.createSVGPoint();
  }

  handleMouseHover(e) {
    // get mouse coordinates
    this.pt.x = e.clientX;
    this.pt.y = e.clientY;

    // mouse coordinates relative to svg
    const cursporpt = this.pt.matrixTransform(
      this.svg.current.getScreenCTM().inverse()
    );

    const { xScale, yScale } = { ...this.state };

    const xValue = Math.floor(xScale.invert(cursporpt.x));
    const yValue = this.props.data[xValue];

    const tooltip = { ...this.state.tooltip };
    tooltip.show = true;
    tooltip.xGraph = xScale(xValue);
    tooltip.yGraph = yScale(yValue);
    tooltip.mouseXAbs = e.clientX;
    tooltip.mouseYAbs = e.clientY;
    tooltip.text1 = Number(yValue).toFixed(2);
    this.setState({ tooltip: tooltip });
  }

  handleMouseLeave() {
    const tooltip = { ...this.state.tooltip };
    tooltip.show = !tooltip.show;
    this.setState({ tooltip: tooltip });
  }

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
        <svg ref={this.svg} width={this.props.width} height={this.props.height}>
          <g
            onMouseMove={this.handleMouseHover}
            onMouseLeave={this.handleMouseLeave}
          >
            <path d={this.state.area} fill="rgba(0, 0, 255, .4)" />
            <SimpleLine
              width={this.props.width}
              height={this.props.height}
              data={this.props.data}
              stroke="rgb(0, 0, 255)"
              margin={this.props.margin}
            />
          </g>
          {tooltipLine}
        </svg>
        {tooltipBox}
      </div>
    );
  }
}

export default AreaLineChart;
