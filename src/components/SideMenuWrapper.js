import React, { Component } from "react";

class SideMenuWrapper extends Component {
  state = { exitAnimation: false };

  static getDerivedStateFromProps(nextProps, prevState) {
    //check for the mounted props
    if (nextProps.current !== nextProps.id) {
      const { exitAnimation } = { ...prevState };
      return { exitAnimation: !exitAnimation };
    } else {
      return null;
    }
  }

  render() {
    return (
      <div
        className={
          this.state.exitAnimation ? "home animate-close" : "home animate-open"
        }
      >
        {this.props.render()}
      </div>
    );
  }
}

export default SideMenuWrapper;
