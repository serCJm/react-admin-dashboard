import React, { Component } from "react";

class SVGWrapper extends Component {
  state = {
    cursport: null,
    mouseAbs: null
  };

  svg = React.createRef();
  pt = null;

  componentDidMount() {
    this.pt = this.svg.current.createSVGPoint();
  }

  handleMouseHover = e => {
    // get mouse coordinates
    this.pt.x = e.clientX;
    this.pt.y = e.clientY;

    // mouse coordinates relative to svg
    const cursport = this.pt.matrixTransform(
      this.svg.current.getScreenCTM().inverse()
    );

    const mouseAbs = {};
    mouseAbs.x = e.clientX;
    mouseAbs.y = e.clientY;

    this.setState({
      cursport: cursport,
      mouseAbs: mouseAbs
    });
  };

  handleMouseLeave = () => {
    this.setState({
      cursport: null,
      mouseAbs: null
    });
  };

  render() {
    return (
      <React.Fragment>
        <svg
          ref={this.svg}
          width={this.props.width}
          height={this.props.height}
          onMouseMove={this.handleMouseHover}
          onMouseOut={this.handleMouseLeave}
        >
          {this.props.render(this.state)}
        </svg>
        {this.props.renderTooltipBox(this.state)}
      </React.Fragment>
    );
  }
}

export default SVGWrapper;
