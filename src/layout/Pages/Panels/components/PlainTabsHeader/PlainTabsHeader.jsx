import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

const contents = [
  { icon: faHome, id: "home" },
  { icon: faUser, id: "user" },
  { icon: faCog, id: "cog" }
];

class PlainTabsHeader extends Component {
  state = {
    showDropdown: false
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  dropdownRef = React.createRef();

  handleClickOutside = e => {
    if (
      this.state.showDropdown &&
      !this.dropdownRef.current.contains(e.target)
    ) {
      this.setState({
        showDropdown: false
      });
    }
  };

  handleDropdown = () => {
    this.setState(state => ({
      showDropdown: !state.showDropdown
    }));
  };

  render() {
    let dropdownIcon = null;
    let dropdown = null;
    if (this.state.showDropdown) {
      dropdown = (
        <div className="tabs__dropdown">
          <p
            className="m0 p1 text"
            onClick={e => this.props.handleSwitchTitle("star", e)}
          >
            @stars
          </p>
          <p
            className="m0 p1 text"
            onClick={e => this.props.handleSwitchTitle("wars", e)}
          >
            @wars
          </p>
        </div>
      );
    }
    if (this.props.dropdown) {
      dropdownIcon = (
        <div
          ref={this.dropdownRef}
          className="p1 tabs__icon"
          onClick={this.handleDropdown}
        >
          <FontAwesomeIcon icon={faAngleDown} />
          {dropdown}
        </div>
      );
    }
    return (
      <div className={`tabs ${this.props.styleClass}`}>
        {contents.map(item => (
          <div
            key={item.id}
            className={
              this.props.active === item.id
                ? "p1 tabs__icon active"
                : "p1 tabs__icon"
            }
            onClick={e => this.props.handleSwitchActive(item.id, e)}
          >
            <FontAwesomeIcon icon={item.icon} />
          </div>
        ))}
        {dropdownIcon}
      </div>
    );
  }
}

export default PlainTabsHeader;
