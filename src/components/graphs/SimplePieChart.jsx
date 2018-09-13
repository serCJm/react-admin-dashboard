import React, { Component } from "react";
import * as d3 from "d3";
import TooltipBox from "./tooltips/TooltipBox";

class SimplePieChart extends Component {
  state = {
    slices: [],
    radius: Math.min(+this.props.width, +this.props.height) / 2,
    classNames: [],
    pieGenerator: d3
      .pie()
      .sort(null)
      .value(d => d),
    arcGenerator: d3.arc(),
    tooltip: {
      show: false,
      mouseXAbs: null,
      mouseYAbs: null,
      text1: null,
      text2: null
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null;
    const { data } = nextProps;
    const { radius, pieGenerator, arcGenerator } = prevState;

    // generate class names
    const classNames = [];
    for (let i = 1; i < data.length + 1; i++) {
      classNames.push(`pie-slice${i}`);
    }

    arcGenerator.outerRadius(radius).innerRadius(0);

    const pieData = pieGenerator(data);
    const slices = pieData.map((d, i) => {
      const path = arcGenerator(d);
      return {
        path,
        className: classNames[i],
        dataValue: d.data
      };
    });

    return { slices };
  }
  handleMouseHover = e => {
    const rect = e.target;
    const tooltip = { ...this.state.tooltip };
    tooltip.show = true;
    tooltip.mouseXAbs = e.clientX;
    tooltip.mouseYAbs = e.clientY;
    const dataValue = Number(+rect.getAttribute("data-value"));
    const dataSum = this.props.data.reduce((a, b) => a + b, 0);
    const percentage = ((dataValue / dataSum) * 100).toFixed(1);
    tooltip.text1 = `${dataValue.toFixed(1)} (${percentage}%)`;
    this.setState({ tooltip: tooltip });
  };

  handleMouseLeave = () => {
    this.setState({
      tooltip: {
        show: false,
        mouseXAbs: null,
        mouseYAbs: null,
        text1: null,
        text2: null
      }
    });
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
        />
      );
    }
    return (
      <React.Fragment>
        <svg width={this.props.width} height={this.props.height}>
          <g
            transform={`translate(${+this.props.width / 2}, ${+this.props
              .height / 2})`}
          >
            {this.state.slices.map((d, i) => (
              <g key={i}>
                <path
                  d={d.path}
                  className={d.className}
                  data-value={d.dataValue}
                  onMouseMove={this.handleMouseHover}
                  onMouseLeave={this.handleMouseLeave}
                />
              </g>
            ))}
          </g>
        </svg>
        {tooltipBox}
      </React.Fragment>
    );
  }
}

export default SimplePieChart;
