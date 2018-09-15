import React, { Component } from "react";

class HeaderMenuBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { isHoverOn: false };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState(prevState => ({ isHoverOn: !prevState.isHoverOn }));
  }
  render() {
    return (
      <button
        className="menu-btn"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        style={
          this.state.isHoverOn
            ? { background: "rgba(46, 179, 152, .75)" }
            : { background: "rgba(46, 179, 152, 1)" }
        }
        {...this.props}
      >
        <div className="menu-btn-icon">
          <div className="brg" />
          <div className="brg" />
          <div className="brg" />
          <div className="brg" />
        </div>
      </button>
    );
  }
}

export default HeaderMenuBtn;
