import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import HeaderControlsSettingsMenu from "./HeaderControlsSettingsMenu";
import { NavLink } from "react-router-dom";

class HeaderControlsProfile extends Component {
  state = {
    showMenu: false,
    current: "fluid"
  };

  handleSettingsMenuClick = () => {
    if (!this.state.showMenu) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };

  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleSettingsMenuClick();
  };

  handleChooseDimension = e => {
    const id = e.target.id;
    this.setState({
      current: id
    });
  };

  render() {
    let headerControlsSettingsMenu = null;
    if (this.state.showMenu) {
      headerControlsSettingsMenu = (
        <HeaderControlsSettingsMenu
          handleChooseDimension={this.handleChooseDimension}
          current={this.state.current}
        />
      );
    }
    return (
      <div className="header-controls-item">
        <NavLink
          className="header-controls-icon"
          to="/social"
          aria-label="Go to social page"
        >
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </NavLink>
        <span
          className="header-controls-icon"
          ref={node => {
            this.node = node;
          }}
          onClick={this.handleSettingsMenuClick}
        >
          <FontAwesomeIcon icon={faCogs} />
          {headerControlsSettingsMenu}
        </span>
      </div>
    );
  }
}

export default HeaderControlsProfile;
