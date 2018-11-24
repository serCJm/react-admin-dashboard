import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import HeaderControlsBell from "./HeaderControlsBell";
import HeaderControlsRSS from "./HeaderControlsRSS";

class HeaderControlsNotifications extends Component {
  state = {
    showNotifications: false,
    showRSS: false
  };

  handleNotificationsClick = () => {
    if (!this.state.showNotifications) {
      // attach/remove event handler
      document.addEventListener(
        "click",
        this.handleNotificationsOutsideClick,
        false
      );
    } else {
      document.removeEventListener(
        "click",
        this.handleNotificationsOutsideClick,
        false
      );
    }
    this.setState(prevState => ({
      showNotifications: !prevState.showNotifications
    }));
  };

  handleNotificationsOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.node1.contains(e.target)) {
      return;
    }
    this.handleNotificationsClick();
  };

  handleRSSClick = () => {
    if (!this.state.showRSS) {
      // attach/remove event handler
      document.addEventListener("click", this.handleRSSOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleRSSOutsideClick, false);
    }
    this.setState(prevState => ({
      showRSS: !prevState.showRSS
    }));
  };

  handleRSSOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.node2.contains(e.target)) {
      return;
    }
    this.handleRSSClick();
  };

  render() {
    let headerControlsBell = null;
    if (this.state.showNotifications) {
      headerControlsBell = <HeaderControlsBell />;
    }

    let headerControlsRSS = null;
    if (this.state.showRSS) {
      headerControlsRSS = <HeaderControlsRSS />;
    }
    return (
      <div className="header-controls-item">
        <NavLink className="header-controls-icon" to="/inbox">
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </NavLink>
        <span
          className="header-controls-icon"
          ref={node => {
            this.node1 = node;
          }}
          onClick={this.handleNotificationsClick}
        >
          <FontAwesomeIcon icon={faBell} />
          {headerControlsBell}
          <div className="bubble1">3</div>
        </span>
        <span
          className="header-controls-icon"
          ref={node => {
            this.node2 = node;
          }}
          onClick={this.handleRSSClick}
        >
          <FontAwesomeIcon icon={faRss} />
          <div className="bubble2">4</div>
          {headerControlsRSS}
        </span>
      </div>
    );
  }
}

export default HeaderControlsNotifications;
