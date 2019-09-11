import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import TooltipBox from "./tooltips/TooltipBox";

const StackedBarChart = props => {
  const xScale = d3
    .scaleBand()
    .rangeRound([0, +props.width])
    .padding(0.1);
  const yScale = d3
    .scaleLinear()
    .rangeRound([+props.height, +props.margin.top]);
  const zScale = d3.scaleOrdinal().range(props.classNames);
  const [bars, setBars] = useState(null);
  const [tooltip, setTooltip] = useState({
    show: false,
    mouseXAbs: null,
    mouseYAbs: null,
    text1: null,
    text2: null
  });

  useEffect(() => {
    const { data } = props;

    const keys = ["male", "female"];

    const dataset = d3.stack().keys(keys)(data);
    xScale.domain(data.map(d => d.date));
    yScale.domain([0, d3.max(dataset[1], d => d[1])]);
    zScale.domain(keys);

    const bars = dataset.map(data => {
      return data.map((d, i) => {
        return {
          x: xScale(i.toString()),
          y: yScale(d[1]),
          height: props.height - yScale(d[1] - d[0]),
          width: xScale.bandwidth(),
          className: zScale(data.key),
          dataKey: i
        };
      });
    });
    setBars(bars);
  }, [props, xScale, yScale, zScale]);

  const handleMouseHover = e => {
    const rect = e.target;
    const tooltipCopy = { ...tooltip };
    tooltipCopy.show = true;
    tooltipCopy.mouseXAbs = e.clientX;
    tooltipCopy.mouseYAbs = e.clientY;
    const index = Number(+rect.getAttribute("data-key"));
    tooltipCopy.text1 = props.data[index].male.toFixed(1);
    tooltipCopy.text2 = props.data[index].female.toFixed(1);
    setTooltip(prevState => {
      return {
        ...prevState,
        ...tooltipCopy
      };
    });
  };

  const handleMouseLeave = () => {
    setTooltip(prevState => {
      return {
        ...prevState,
        show: false,
        mouseXAbs: null,
        mouseYAbs: null,
        text1: null,
        text2: null
      };
    });
  };

  return (
    <React.Fragment>
      <svg width={props.width} height={props.height}>
        <g>
          {bars[0].map((d, i) => (
            <rect
              key={i + d.className}
              x={d.x}
              y={d.y}
              height={d.height}
              width={d.width}
              className={d.className}
              data-key={d.dataKey}
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </g>
        <g>
          {bars[1].map((d, i) => (
            <rect
              key={i + d.className}
              x={d.x}
              y={d.y}
              height={d.height}
              width={d.width}
              className={d.className}
              data-key={d.dataKey}
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </g>
      </svg>
      {tooltip.show && (
        <TooltipBox
          position={{
            left: tooltip.mouseXAbs + 15,
            top: tooltip.mouseYAbs - 15
          }}
          text1={tooltip.text1}
          text2={tooltip.text2}
        />
      )}
    </React.Fragment>
  );
};

export default StackedBarChart;

// class StackedBarChart extends Component {
//   state = {
//     xScale: d3
//       .scaleBand()
//       .rangeRound([0, +this.props.width])
//       .padding(0.1),
//     yScale: d3
//       .scaleLinear()
//       .rangeRound([+this.props.height, +this.props.margin.top]),
//     zScale: d3.scaleOrdinal().range(this.props.classNames),
//     tooltip: {
//       show: false,
//       mouseXAbs: null,
//       mouseYAbs: null,
//       text1: null,
//       text2: null
//     }
//   };

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (!nextProps.data) return null;

//     const { data } = nextProps;
//     const { xScale, yScale, zScale } = prevState;

//     const keys = ["male", "female"];

//     const dataset = d3.stack().keys(keys)(data);
//     xScale.domain(data.map(d => d.date));
//     yScale.domain([0, d3.max(dataset[1], d => d[1])]);
//     zScale.domain(keys);

//     const bars = dataset.map(data => {
//       return data.map((d, i) => {
//         return {
//           x: xScale(i.toString()),
//           y: yScale(d[1]),
//           height: nextProps.height - yScale(d[1] - d[0]),
//           width: xScale.bandwidth(),
//           className: zScale(data.key),
//           dataKey: i
//         };
//       });
//     });
//     return { bars };
//   }

//   handleMouseHover = e => {
//     const rect = e.target;
//     const tooltip = { ...this.state.tooltip };
//     tooltip.show = true;
//     tooltip.mouseXAbs = e.clientX;
//     tooltip.mouseYAbs = e.clientY;
//     const index = Number(+rect.getAttribute("data-key"));
//     tooltip.text1 = this.props.data[index].male.toFixed(1);
//     tooltip.text2 = this.props.data[index].female.toFixed(1);
//     this.setState({ tooltip: tooltip });
//   };

//   handleMouseLeave = () => {
//     this.setState({
//       tooltip: {
//         show: false,
//         mouseXAbs: null,
//         mouseYAbs: null,
//         text1: null,
//         text2: null
//       }
//     });
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <svg width={this.props.width} height={this.props.height}>
//           <g>
//             {this.state.bars[0].map((d, i) => (
//               <rect
//                 key={i + d.className}
//                 x={d.x}
//                 y={d.y}
//                 height={d.height}
//                 width={d.width}
//                 className={d.className}
//                 data-key={d.dataKey}
//                 onMouseEnter={this.handleMouseHover}
//                 onMouseLeave={this.handleMouseLeave}
//               />
//             ))}
//           </g>
//           <g>
//             {this.state.bars[1].map((d, i) => (
//               <rect
//                 key={i + d.className}
//                 x={d.x}
//                 y={d.y}
//                 height={d.height}
//                 width={d.width}
//                 className={d.className}
//                 data-key={d.dataKey}
//                 onMouseEnter={this.handleMouseHover}
//                 onMouseLeave={this.handleMouseLeave}
//               />
//             ))}
//           </g>
//         </svg>
//         {this.state.tooltip.show && (
//           <TooltipBox
//             position={{
//               left: this.state.tooltip.mouseXAbs + 15,
//               top: this.state.tooltip.mouseYAbs - 15
//             }}
//             text1={this.state.tooltip.text1}
//             text2={this.state.tooltip.text2}
//           />
//         )}
//       </React.Fragment>
//     );
//   }
// }

// export default StackedBarChart;
