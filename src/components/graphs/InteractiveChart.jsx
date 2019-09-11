import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import TooltipBox from "./tooltips/TooltipBox";
import LineWithCircle from "./tooltips/LineWithCircle";

// component based on // based on https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172

const margin = { top: 20, right: 20, bottom: 110, left: 40 },
  margin2 = { top: 230, right: 10, bottom: 20, left: 40 },
  height = 300 - margin.top - margin.bottom,
  height2 = 300 - margin2.top - margin2.bottom;

const InteractiveChart = props => {
  const width = props.width - margin.left - margin.right;

  const areaGenerator = d3.area();
  const xScale = d3.scaleTime().range([0, width]);
  const xScale2 = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);
  const yScale2 = d3.scaleLinear().range([height2, 0]);

  const [area, setArea] = useState(null);
  const [area2, setArea2] = useState(null);
  const [tooltip, setTooltip] = useState({
    show: false,
    xGraph: null,
    yGraph: null,
    y1: height,
    y2: 0,
    mouseXAbs: null,
    mouseYAbs: null,
    text1: null,
    text2: null
  });

  const svg = useRef(null);
  const pt = useRef(null);

  const xAxisRef = useRef(null);
  const xAxis2Ref = useRef(null);
  const yAxisRef = useRef(null);
  const yAxisGridRef = useRef(null);
  const brushArea = useRef(null);

  const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
  // axis for slider
  const xAxis2 = d3.axisBottom(xScale2);
  const yAxis = d3
    .axisLeft(yScale)
    .tickValues(d3.range(10, 100, 10))
    .tickSizeOuter(0);

  useEffect(() => {
    if (props.data) {
      const { data } = props;

      const brush = d3
        .brushX()
        .extent([[0, 0], [width, height2]])
        .on("brush end", function brushed() {
          const s = d3.event.selection || xScale2;

          xScale.domain(s.map(xScale2.invert, xScale2));

          areaGenerator
            .x(function(d) {
              return xScale(d.date);
            })
            .y0(height)
            .y1(function(d) {
              return yScale(d.number);
            });

          const area = areaGenerator(data);

          d3.select(".x-axis").call(xAxis);
          d3.select(".y-axis-grid").call(
            d3
              .axisBottom(xScale)
              .tickSize(-height)
              .tickFormat("")
          );
          setArea(area);
        });

      const parseDate = d3.timeParse("%b-%Y");
      data.forEach(d => parseDate(d.date));

      yScale.domain([0, d3.max(data, d => d.number)]);
      xScale2.domain(d3.extent(data, d => d.date)); // Setting a duplicate xdomain for brushing reference later
      yScale2.domain(yScale.domain());

      areaGenerator
        // .curve(d3.curveMonotoneX)
        .x(function(d) {
          return xScale2(d.date);
        })
        .y0(height2)
        .y1(function(d) {
          return yScale2(d.number);
        });

      const area2 = areaGenerator(data);

      setArea2(area2);

      d3.select(xAxisRef.current).call(xAxis);
      d3.select(yAxisRef.current).call(yAxis);
      d3.select(yAxisGridRef.current).call(
        d3
          .axisBottom(xScale)
          .tickSize(-height, 0, 0)
          .tickFormat("")
      );
      d3.select(xAxis2Ref.current).call(xAxis2);
      d3.select(brushArea.current)
        .call(brush)
        .call(brush.move, xScale.range());

      pt.current = svg.current.createSVGPoint();
    }

    return () => {
      d3.brushX().on("brush end", null);
    };
  }, [
    props,
    width,
    yScale,
    xScale2,
    yScale2,
    areaGenerator,
    xAxis,
    yAxis,
    xScale,
    xAxis2
  ]);

  const handleMouseHover = e => {
    // get mouse coordinates
    pt.current.x = e.clientX;

    // mouse coordinates relative to svg
    const cursporpt = pt.current.matrixTransform(
      svg.current.getScreenCTM().inverse()
    );

    const xValue = xScale.invert(Math.round(cursporpt.x) - margin.left - 1);

    const bisectDate = d3.bisector(d => d.date).left;
    const i = bisectDate(props.data, xValue, 1);
    const d0 = props.data[i - 1];
    const d1 = props.data[i];
    const d = xValue - d0.date > d1.date - xValue ? d1 : d0;

    const tooltipCopy = { ...tooltip };
    tooltipCopy.show = true;
    tooltipCopy.xGraph = xScale(d.date);
    tooltipCopy.yGraph = yScale(d.number);
    tooltipCopy.mouseXAbs = e.clientX;
    tooltipCopy.mouseYAbs = e.clientY;
    const timeFormat = d3.timeFormat("%b %Y");
    tooltipCopy.text1 = timeFormat(d.date);
    tooltipCopy.text2 = d.number;
    if (tooltipCopy.text1 !== tooltip.text1) {
      setTooltip(prevState => {
        return { ...prevState, ...tooltipCopy };
      });
    }
  };

  const handleMouseLeave = () => {
    const tooltipCopy = { ...tooltip };
    tooltip.show = false;
    setTooltip(prevState => {
      return { ...prevState, ...tooltipCopy };
    });
  };

  let tooltipBox = null;
  if (tooltip.show) {
    tooltipBox = (
      <TooltipBox
        position={{
          left: tooltip.mouseXAbs + 25,
          top: tooltip.mouseYAbs - 70
        }}
        text1={tooltip.text1}
        text2={tooltip.text2}
        tooltipClass={props.tooltipClass}
      />
    );
  }
  let tooltipLine = null;
  if (tooltip.show) {
    tooltipLine = (
      <LineWithCircle
        tooltip={tooltip}
        lineColor="rgb(202, 216, 229)"
        circleRadius="7"
        circleFill="rgb(102, 102, 255)"
        circleStroke="white"
        circleStrokeWidth="3"
      />
    );
  }

  return (
    <React.Fragment>
      <svg
        ref={svg}
        // this is a hack to keep svg responsive because ContainerDimensions only re-renders new width prop on reload
        // another approach would be is to force component to update through event listeners
        // however, given the code size, in this case seems to be redundant
        preserveAspectRatio="xMinYMin meet"
        viewBox={`0 0 ${width + margin.left + margin.right} ${height +
          margin.top +
          margin.bottom}`}
      >
        <defs>
          <clipPath id="clip">
            <rect width={width} height={height} />
          </clipPath>
        </defs>
        <g
          className="focus"
          transform={`translate( ${margin.left} , ${margin.top} )`}
          onMouseMove={e => handleMouseHover(e)}
          onMouseLeave={handleMouseLeave}
        >
          <path d={area} className="area" fill="rgba(0, 0, 255, .4)" />
          {tooltipLine}
          <g
            ref={xAxisRef}
            className="x-axis"
            transform={`translate(0, ${height})`}
          />
          <g ref={yAxisRef} className="y-axis" />
          <g
            ref={yAxisGridRef}
            className="y-axis y-axis-grid"
            transform={`translate(0, ${height})`}
          />
        </g>
        <g
          className="context"
          transform={`translate( ${margin2.left} , ${margin2.top} )`}
        >
          <path d={area2} fill="rgba(0, 0, 255, .4)" />
          <g ref={xAxis2Ref} transform={`translate(0, ${height2})`} />
          <g ref={brushArea} className="brush" />
        </g>
      </svg>
      {tooltipBox}
    </React.Fragment>
  );
};

export default InteractiveChart;

// class InteractiveChart extends Component {
//   // move into component to make it dynamic using ContainerDimensions on parent
//   width = this.props.width - margin.left - margin.right;
//   state = {
//     width: this.width,
//     area: null,
//     area2: null,
//     xScale: d3.scaleTime().range([0, this.width]),
//     xScale2: d3.scaleTime().range([0, this.width]),
//     yScale: d3.scaleLinear().range([height, 0]),
//     yScale2: d3.scaleLinear().range([height2, 0]),
//     areaGenerator: d3.area(),
//     tooltip: {
//       show: false,
//       xGraph: null,
//       yGraph: null,
//       y1: height,
//       y2: 0,
//       mouseXAbs: null,
//       mouseYAbs: null,
//       text1: null,
//       text2: null
//     }
//   };

//   svg = React.createRef();
//   pt = null;

//   xAxisRef = React.createRef();
//   xAxis2Ref = React.createRef();
//   yAxisRef = React.createRef();
//   yAxisGridRef = React.createRef();
//   brushArea = React.createRef();

//   brush = d3
//     .brushX()
//     .extent([[0, 0], [this.width, height2]])
//     .on(
//       "brush end",
//       function brushed() {
//         const { xScale, yScale, xScale2, areaGenerator } = this.state;
//         const s = d3.event.selection || xScale2;

//         xScale.domain(s.map(xScale2.invert, xScale2));

//         areaGenerator
//           .x(function(d) {
//             return xScale(d.date);
//           })
//           .y0(height)
//           .y1(function(d) {
//             return yScale(d.number);
//           });

//         const area = areaGenerator(this.props.data);

//         // d3.select(this.area.current).attr("d", area);
//         d3.select(".x-axis").call(this.xAxis);
//         d3.select(".y-axis-grid").call(
//           d3
//             .axisBottom(this.state.xScale)
//             .tickSize(-height)
//             .tickFormat("")
//         );
//         this.setState({ area: area, xScale: xScale });
//       }.bind(this)
//     );

//   xAxis = d3.axisBottom(this.state.xScale).tickSizeOuter(0);
//   // axis for slider
//   xAxis2 = d3.axisBottom(this.state.xScale2);
//   yAxis = d3
//     .axisLeft(this.state.yScale)
//     .tickValues(d3.range(10, 100, 10))
//     .tickSizeOuter(0);

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (!nextProps.data) return null;

//     const { data } = nextProps;
//     const parseDate = d3.timeParse("%b-%Y");
//     data.forEach(d => parseDate(d.date));

//     const { xScale2, yScale, yScale2, areaGenerator } = prevState;

//     yScale.domain([0, d3.max(data, d => d.number)]);
//     xScale2.domain(d3.extent(data, d => d.date)); // Setting a duplicate xdomain for brushing reference later
//     yScale2.domain(yScale.domain());

//     areaGenerator
//       // .curve(d3.curveMonotoneX)
//       .x(function(d) {
//         return xScale2(d.date);
//       })
//       .y0(height2)
//       .y1(function(d) {
//         return yScale2(d.number);
//       });

//     const area2 = areaGenerator(data);

//     return { area2 };
//   }

//   componentDidMount() {
//     d3.select(this.xAxisRef.current).call(this.xAxis);
//     d3.select(this.yAxisRef.current).call(this.yAxis);
//     d3.select(this.yAxisGridRef.current).call(
//       d3
//         .axisBottom(this.state.xScale)
//         .tickSize(-height, 0, 0)
//         .tickFormat("")
//     );
//     d3.select(this.xAxis2Ref.current).call(this.xAxis2);
//     d3.select(this.brushArea.current)
//       .call(this.brush)
//       .call(this.brush.move, this.state.xScale.range());

//     this.pt = this.svg.current.createSVGPoint();
//   }

//   componentWillUnmount() {
//     d3.brushX().on("brush end", null);
//   }

//   handleMouseHover = e => {
//     // get mouse coordinates
//     this.pt.x = e.clientX;

//     // mouse coordinates relative to svg
//     const cursporpt = this.pt.matrixTransform(
//       this.svg.current.getScreenCTM().inverse()
//     );

//     const { xScale, yScale } = { ...this.state };

//     const xValue = xScale.invert(Math.round(cursporpt.x) - margin.left - 1);

//     const bisectDate = d3.bisector(d => d.date).left;
//     const i = bisectDate(this.props.data, xValue, 1);
//     const d0 = this.props.data[i - 1];
//     const d1 = this.props.data[i];
//     const d = xValue - d0.date > d1.date - xValue ? d1 : d0;

//     const tooltip = { ...this.state.tooltip };
//     tooltip.show = true;
//     tooltip.xGraph = xScale(d.date);
//     tooltip.yGraph = yScale(d.number);
//     tooltip.mouseXAbs = e.clientX;
//     tooltip.mouseYAbs = e.clientY;
//     const timeFormat = d3.timeFormat("%b %Y");
//     tooltip.text1 = timeFormat(d.date);
//     tooltip.text2 = d.number;
//     if (tooltip.text1 !== this.state.tooltip.text1) {
//       this.setState({ tooltip: tooltip });
//     }
//   };

//   handleMouseLeave = () => {
//     const tooltip = { ...this.state.tooltip };
//     tooltip.show = false;
//     this.setState({ tooltip: tooltip });
//   };

//   render() {
//     let tooltipBox = null;
//     if (this.state.tooltip.show) {
//       tooltipBox = (
//         <TooltipBox
//           position={{
//             left: this.state.tooltip.mouseXAbs + 25,
//             top: this.state.tooltip.mouseYAbs - 70
//           }}
//           text1={this.state.tooltip.text1}
//           text2={this.state.tooltip.text2}
//           tooltipClass={this.props.tooltipClass}
//         />
//       );
//     }
//     let tooltipLine = null;
//     if (this.state.tooltip.show) {
//       tooltipLine = (
//         <LineWithCircle
//           tooltip={this.state.tooltip}
//           lineColor="rgb(202, 216, 229)"
//           circleRadius="7"
//           circleFill="rgb(102, 102, 255)"
//           circleStroke="white"
//           circleStrokeWidth="3"
//         />
//       );
//     }
//     return (
//       <React.Fragment>
//         <svg
//           ref={this.svg}
//           // this is a hack to keep svg responsive because ContainerDimensions only re-renders new width prop on reload
//           // another approach would be is to force component to update through event listeners
//           // however, given the code size, in this case seems to be redundant
//           preserveAspectRatio="xMinYMin meet"
//           viewBox={`0 0 ${this.state.width +
//             margin.left +
//             margin.right} ${height + margin.top + margin.bottom}`}
//         >
//           <defs>
//             <clipPath id="clip">
//               <rect width={this.width} height={height} />
//             </clipPath>
//           </defs>
//           <g
//             className="focus"
//             transform={`translate( ${margin.left} , ${margin.top} )`}
//             onMouseMove={e => this.handleMouseHover(e)}
//             onMouseLeave={this.handleMouseLeave}
//           >
//             <path
//               d={this.state.area}
//               className="area"
//               fill="rgba(0, 0, 255, .4)"
//             />
//             {tooltipLine}
//             <g
//               ref={this.xAxisRef}
//               className="x-axis"
//               transform={`translate(0, ${height})`}
//             />
//             <g ref={this.yAxisRef} className="y-axis" />
//             <g
//               ref={this.yAxisGridRef}
//               className="y-axis y-axis-grid"
//               transform={`translate(0, ${height})`}
//             />
//           </g>
//           <g
//             className="context"
//             transform={`translate( ${margin2.left} , ${margin2.top} )`}
//           >
//             <path d={this.state.area2} fill="rgba(0, 0, 255, .4)" />
//             <g ref={this.xAxis2Ref} transform={`translate(0, ${height2})`} />
//             <g ref={this.brushArea} className="brush" />
//           </g>
//         </svg>
//         {tooltipBox}
//       </React.Fragment>
//     );
//   }
// }

// export default InteractiveChart;
