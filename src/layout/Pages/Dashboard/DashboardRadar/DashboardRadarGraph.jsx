import React, { Component } from "react";
import * as d3 from "d3";

// example taken from https://bl.ocks.org/alandunning/4c36eb1abdb248de34c64f5672afd857#data.json
const data = [
  [
    { area: "Japan", value: Math.round(Math.random() * 90) },
    { area: "France", value: Math.round(Math.random() * 90) },
    { area: "USA", value: Math.round(Math.random() * 90) },
    { area: "Russia", value: Math.round(Math.random() * 90) },
    { area: "China", value: Math.round(Math.random() * 90) },
    { area: "Dubai", value: Math.round(Math.random() * 90) },
    { area: "India", value: Math.round(Math.random() * 90) }
  ]
];

const cfg = {
  radius: 5,
  w: 250,
  h: 250,
  factor: 1,
  factorLegend: 0.85,
  levels: 5,
  maxValue: 100,
  radians: 2 * Math.PI,
  opacityArea: 0.5,
  ToRight: 5,
  TranslateX: 0,
  TranslateY: 0,
  ExtraWidthX: 0,
  ExtraWidthY: 0,
  color: d3.scaleOrdinal().range(["#6F257F", "#CA0D59"])
};

const allAxis = data[0].map((i, j) => {
  return i.area;
});
const total = allAxis.length;

class DashboardRadarGraph extends Component {
  state = {
    radius: cfg.factor * Math.min(this.props.width / 2, this.props.width / 2),
    circularSegments: [],
    circularSegmentsText: []
  };

  radarChart = React.createRef();
  svg = React.createRef();
  svgG = React.createRef();

  static getDerivedStateFromProps(nextProps, prevState) {
    const { circularSegments, circularSegmentsText } = prevState;

    // circular axis segments
    for (let j = 0; j < cfg.levels; j++) {
      const levelFactor =
        cfg.factor * prevState.radius * ((j + 1) / cfg.levels);
      const circularSegmentLevel = [];
      allAxis.forEach((d, i) => {
        const circularSegment = {};
        circularSegment.x1 =
          levelFactor * (1 - cfg.factor * Math.sin((i * cfg.radians) / total));
        circularSegment.y1 =
          levelFactor * (1 - cfg.factor * Math.cos((i * cfg.radians) / total));
        circularSegment.x2 =
          levelFactor *
          (1 - cfg.factor * Math.sin(((i + 1) * cfg.radians) / total));
        circularSegment.y2 =
          levelFactor *
          (1 - cfg.factor * Math.cos(((i + 1) * cfg.radians) / total));
        circularSegment.translateX = nextProps.width / 2 - levelFactor;
        circularSegment.translateY = nextProps.width / 2 - levelFactor;
        circularSegmentLevel.push(circularSegment);
      });
      circularSegments.push(...circularSegmentLevel);
    }

    // circular axis text
    for (let j = 0; j < cfg.levels; j++) {
      const levelFactor =
        cfg.factor * prevState.radius * ((j + 1) / cfg.levels);
      const circularSegmentsTextLevel = {};
      circularSegmentsTextLevel.x =
        levelFactor * (1 - cfg.factor * Math.sin(0));
      circularSegmentsTextLevel.y =
        levelFactor * (1 - cfg.factor * Math.cos(0));
      circularSegmentsTextLevel.translateX =
        nextProps.width / 2 - levelFactor + cfg.ToRight;
      circularSegmentsTextLevel.translateY = nextProps.width / 2 - levelFactor;
      circularSegmentsTextLevel.text = ((j + 1) * 100) / cfg.levels;
      circularSegmentsText.push(circularSegmentsTextLevel);
    }

    return { circularSegments, circularSegmentsText };
  }

  RadarChart = {
    draw: function(id, d) {
      var g = d3.select(this.svgG.current);

      let series = 0;

      var axis = g
        .selectAll(".axis")
        .data(allAxis)
        .enter()
        .append("g")
        .attr("class", "axis");

      axis
        .append("line")
        .attr("x1", this.props.width / 2)
        .attr("y1", this.props.width / 2)
        .attr(
          "x2",
          function(d, i) {
            return (
              (this.props.width / 2) *
              (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
            );
          }.bind(this)
        )
        .attr(
          "y2",
          function(d, i) {
            return (
              (this.props.width / 2) *
              (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
            );
          }.bind(this)
        )
        .attr("class", "line")
        .style("stroke", "grey")
        .style("stroke-width", "1px");

      axis
        .append("text")
        .attr("class", "legend")
        .text(function(d) {
          return d;
        })
        .style("font-family", "sans-serif")
        .style("font-size", "11px")
        .attr("text-anchor", "middle")
        .attr("dx", function(d, i) {
          if (d === "Dubai") {
            return "-2em";
          } else if (d === "USA") {
            return "2em";
          }
        })
        .attr("transform", function(d, i) {
          return "translate(0, 0)";
        })
        .attr(
          "x",
          function(d, i) {
            return (
              (this.props.width / 2) *
                (1 - cfg.factorLegend * Math.sin((i * cfg.radians) / total)) -
              60 * Math.sin((i * cfg.radians) / total)
            );
          }.bind(this)
        )
        .attr(
          "y",
          function(d, i) {
            return (
              (this.props.width / 2) *
                (1 - Math.cos((i * cfg.radians) / total)) -
              20 * Math.cos((i * cfg.radians) / total)
            );
          }.bind(this)
        );

      d.forEach(
        function(y, x) {
          let dataValues = [];
          g.selectAll(".nodes").data(
            y,
            function(j, i) {
              dataValues.push([
                (this.props.width / 2) *
                  (1 -
                    (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                      cfg.factor *
                      Math.sin((i * cfg.radians) / total)),
                (this.props.width / 2) *
                  (1 -
                    (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                      cfg.factor *
                      Math.cos((i * cfg.radians) / total))
              ]);
            }.bind(this)
          );
          dataValues.push(dataValues[0]);
          g.selectAll(".area")
            .data([dataValues])
            .enter()
            .append("polygon")
            .attr("class", "radar-chart-serie" + series)
            .style("stroke-width", "2px")
            .style("stroke", cfg.color(series))
            .attr("points", function(d) {
              var str = "";
              for (var pti = 0; pti < d.length; pti++) {
                str = str + d[pti][0] + "," + d[pti][1] + " ";
              }
              return str;
            })
            .style("fill", function(j, i) {
              return cfg.color(series);
            })
            .style("fill-opacity", cfg.opacityArea)
            .on("mouseover", function(d) {
              let z = "polygon." + d3.select(this).attr("class");
              g.selectAll("polygon")
                .transition(200)
                .style("fill-opacity", 0.1);
              g.selectAll(z)
                .transition(200)
                .style("fill-opacity", 0.7);
            })
            .on("mouseout", function() {
              g.selectAll("polygon")
                .transition(200)
                .style("fill-opacity", cfg.opacityArea);
            });
          series++;
        }.bind(this)
      );
      series = 0;

      var tooltip = d3
        .select(this.radarChart.current)
        .append("div")
        .attr("class", "toolTip");
      d.forEach(
        function(y, x) {
          let dataValues = [];
          g.selectAll(".nodes")
            .data(y)
            .enter()
            .append("svg:circle")
            .attr("class", "radar-chart-serie" + series)
            .attr("r", cfg.radius)
            .attr("alt", function(j) {
              return Math.max(j.value, 0);
            })
            .attr(
              "cx",
              function(j, i) {
                dataValues.push([
                  (this.props.width / 2) *
                    (1 -
                      (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                        cfg.factor *
                        Math.sin((i * cfg.radians) / total)),
                  (this.props.width / 2) *
                    (1 -
                      (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                        cfg.factor *
                        Math.cos((i * cfg.radians) / total))
                ]);
                return (
                  (this.props.width / 2) *
                  (1 -
                    (Math.max(j.value, 0) / cfg.maxValue) *
                      cfg.factor *
                      Math.sin((i * cfg.radians) / total))
                );
              }.bind(this)
            )
            .attr(
              "cy",
              function(j, i) {
                return (
                  (this.props.width / 2) *
                  (1 -
                    (Math.max(j.value, 0) / cfg.maxValue) *
                      cfg.factor *
                      Math.cos((i * cfg.radians) / total))
                );
              }.bind(this)
            )
            .attr("data-id", function(j) {
              return j.area;
            })
            .style("fill", "#fff")
            .style("stroke-width", "2px")
            .style("stroke", cfg.color(series))
            .style("fill-opacity", 0.9)
            .on("mouseover", function(d) {
              //console.log(d.area);
              tooltip
                .style("left", d3.event.pageX - 30 + "px")
                .style("top", d3.event.pageY - 70 + "px")
                .style("display", "inline-block")
                .html(d.area + "<br><span>" + d.value + "</span>");
            })
            .on("mouseout", function(d) {
              tooltip.style("display", "none");
            });

          series++;
        }.bind(this)
      );
    }.bind(this)
  };
  componentDidMount() {
    this.RadarChart.draw(this.radarChart.current, data);
  }
  render() {
    return (
      <div className="radar-chart" ref={this.radarChart}>
        <svg
          ref={this.svg}
          width={this.props.width + 150}
          height={this.props.width + 150}
        >
          <g ref={this.svgG} transform={`translate(${75}, ${75})`}>
            {this.state.circularSegments.map((d, i) => (
              <line
                key={i}
                x1={d.x1}
                y1={d.y1}
                x2={d.x2}
                y2={d.y2}
                transform={`translate(${d.translateX}, ${d.translateY})`}
                stroke="grey"
                strokeOpacity="0.75"
                strokeWidth="0.3px"
              />
            ))}
            {this.state.circularSegmentsText.map((d, i) => (
              <text
                key={i}
                x={d.x}
                y={d.y}
                transform={`translate(${d.translateX}, ${d.translateY})`}
              >
                {d.text}
              </text>
            ))}
          </g>
        </svg>
      </div>
    );
  }
}

export default DashboardRadarGraph;
