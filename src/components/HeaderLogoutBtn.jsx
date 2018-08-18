import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

class HeaderLogoutBtn extends Component {
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
            ? { background: "rgb(234, 118, 97)" }
            : { background: "rgba(231, 96, 73, 1)" }
        }
      >
        <span className="menu-btn-icon">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </span>
      </button>
    );
  }
}

export default HeaderLogoutBtn;
