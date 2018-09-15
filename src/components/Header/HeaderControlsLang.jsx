import React, { Component } from "react";
import usFlag from "../../images/us-flag.svg.png";

class HeaderControlsLang extends Component {
  state = {};
  render() {
    return (
      <div className="header-controls-item">
        <img src={usFlag} alt="us flag" width="35" height="30" />
      </div>
    );
  }
}

export default HeaderControlsLang;
