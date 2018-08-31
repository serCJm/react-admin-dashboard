import React, { Component } from "react";
import * as d3 from "d3";

class PolarAreaChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverDataCategory: null,
      hoverDataValue: null,
      x: 0,
      y: 0
    };

    this.svg = React.createRef();
    this.pt = null;

    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    this.handleHoverEnter = this.handleHoverEnter.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.pt = this.svg.current.createSVGPoint();
  }

  handleHoverEnter(id, value) {
    this.setState({ hoverDataCategory: id, hoverDataValue: value });
  }

  handleHoverLeave() {
    this.setState({
      hoverDataCategory: null,
      hoverDataValue: null,
      x: 0,
      y: 0
    });
  }

  // get mouse coordinates relative to svg
  // and set them into state
  handleMouseMove(e) {
    this.pt.x = e.clientX;
    this.pt.y = e.clientY;

    const cursporpt = this.pt.matrixTransform(
      this.svg.current.getScreenCTM().inverse()
    );
    this.setState({
      x: cursporpt.x,
      y: cursporpt.y
    });
  }

  drawPolarArea() {
    const radiusMax = this.props.radius;
    const radiusScale = d3.scaleSqrt().range([0, radiusMax]);
    const colorScale = d3.schemeDark2;

    const pie = d3.pie();
    const arc = d3.arc();

    function renderChart(data) {
      radiusScale.domain([
        0,
        d3.max(data, function(d) {
          return d.number;
        })
      ]);

      pie.value(d => d.number).sort(null);

      arc.innerRadius(0).outerRadius(d => radiusScale(d.data.number));

      const pieData = pie(data);

      // generate plot axis
      const axis = radiusScale
        .ticks(2)
        .slice(1)
        .map(tick => {
          return (
            <g key={`axis-${tick}`}>
              <circle
                r={radiusScale(tick)}
                fill="none"
                stroke="rgb(53, 62, 66)"
              />
              <text y={-radiusScale(tick) + 10} textAnchor="middle">
                {tick}
              </text>
            </g>
          );
        });
      // generate graph data areas
      const paths = pieData.map((slice, i) => {
        return (
          <g key={slice.data.category}>
            <path
              fill={colorScale[i]}
              d={arc(slice)}
              stroke="white"
              strokeWidth="2"
              onMouseEnter={this.handleHoverEnter.bind(
                this,
                slice.data.category,
                slice.data.number
              )}
              onMouseLeave={this.handleHoverLeave}
              onMouseMove={this.handleMouseMove}
              style={
                slice.data.category === this.state.hoverDataCategory
                  ? {
                      fill: d3.color(colorScale[i]).brighter([0.2])
                    }
                  : { opacity: ".4" }
              }
            />
            {}
          </g>
        );
      });

      return [axis, paths];
    }

    return renderChart.call(this, this.props.data);
  }
  render() {
    let tooltip;
    // display tooltip on hover
    // uisng svg path to draw tooltip shape
    if (this.state.hoverDataCategory) {
      tooltip = (
        <g
          transform={`translate(${this.state.x}, ${this.state.y - 8}
            )`}
        >
          <path
            d="M 0,0 L -10,-10 H -50 Q -60,-10 -60,-20 V -25 Q -60,-35
            -50,-35 H 50 Q 60,-35 60,-25 V -20 Q 60,-10 50,-10 H 10 z"
            style={{
              fill: "rgba(7, 9, 10, .7)",
              stroke: "black"
            }}
          />
          <text textAnchor="middle" x="0" y="-18" style={{ fill: "white" }}>
            {`${this.state.hoverDataCategory.charAt(0).toUpperCase() +
              this.state.hoverDataCategory.slice(1)}: ${
              this.state.hoverDataValue
            }`}
          </text>
        </g>
      );
    }

    return (
      <svg ref={this.svg} width={this.props.width} height={this.props.height}>
        <g
          transform={`translate(
            ${this.props.width / 2}
            ,
            ${this.props.height / 2}
            )`}
        >
          {/* {note, this approach is not very performant as it causes the function to run twice. Possibly, a better approach would be to run a function on component mount and store necessary data in a state} */}
          {this.drawPolarArea()[0]}
          {this.drawPolarArea()[1]}
        </g>
        {tooltip}
      </svg>
    );
  }
}

export default PolarAreaChart;
