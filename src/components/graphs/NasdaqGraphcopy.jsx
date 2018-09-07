import React, { Component } from "react";
import * as d3 from "d3";
import SVGWrapper from "./SVGWrapper";
import LineWithCircle from "./tooltips/LineWithCircle";
import TooltipBox from "./tooltips/TooltipBox";

class NasdaqGraph extends Component {
  state = {
    line: null,
    xScale: d3.scaleLinear().range([0, +this.props.width]),
    yScale: d3
      .scaleLinear()
      .range([+this.props.height, +this.props.margin.top]),
    lineGenerator: d3.line(),
    tooltip: {
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { xScale, yScale, lineGenerator } = prevState;

    xScale.domain([0, d3.max(data, (d, i) => i)]);
    yScale.domain(d3.extent(data, d => d));

    lineGenerator.x((d, i) => xScale(i));
    lineGenerator.y(d => yScale(d));

    const line = lineGenerator(data);
    return { line };
  }

  calcTooltipPos = (cursport, mouseAbs) => {
    const { xScale, yScale } = { ...this.state };

    const xValue = Math.round(xScale.invert(cursport.x));
    const yValue = this.props.data[xValue];

    const tooltip = { ...this.state.tooltip };
    tooltip.show = true;
    tooltip.xGraph = xScale(xValue);
    tooltip.yGraph = yScale(yValue);
    tooltip.y1 = +this.props.height;
    tooltip.y2 = +this.props.margin.top;
    tooltip.mouseXAbs = mouseAbs.x;
    tooltip.mouseYAbs = mouseAbs.y;
    tooltip.text1 = `Index: ${Number(yValue).toFixed(2)}`;
    return tooltip;
  };

  render() {
    let tooltipLine, tooltipBox;
    return (
      <div>
        <SVGWrapper
          width={this.props.width}
          height={this.props.height}
          render={({ cursport, mouseAbs }) => {
            if (cursport) {
              const tooltip = this.calcTooltipPos(cursport, mouseAbs);

              tooltipLine = <LineWithCircle tooltip={tooltip} />;
            } else {
              tooltipLine = null;
            }

            return (
              <g>
                <path d={this.state.line} fill="none" stroke="green" />
                {tooltipLine}
              </g>
            );
          }}
          renderTooltipBox={({ cursport, mouseAbs }) => {
            if (cursport) {
              const tooltip = this.calcTooltipPos(cursport, mouseAbs);

              tooltipBox = (
                <TooltipBox
                  position={{
                    left: tooltip.mouseXAbs + 15,
                    top: tooltip.mouseYAbs - 15
                  }}
                  text1={tooltip.text1}
                />
              );
            } else {
              tooltipBox = null;
            }

            return tooltipBox;
          }}
        />
      </div>
    );
  }
}

export default NasdaqGraph;
