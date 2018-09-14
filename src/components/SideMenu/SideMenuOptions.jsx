import React, { Component } from "react";
import ListMenuOptions from "../ListMenuOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

class SideMenuOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: "home", item: <FontAwesomeIcon icon={faHome} /> },
        { id: "comments", item: <FontAwesomeIcon icon={faComments} /> },
        { id: "chartbar", item: <FontAwesomeIcon icon={faChartBar} /> },
        { id: "history", item: <FontAwesomeIcon icon={faHistory} /> },
        {
          id: "exclamation",
          item: <FontAwesomeIcon icon={faExclamationCircle} />
        }
      ],
      classNames: {
        ul: "menuOptions",
        li: "menuOption",
        hover: "hover",
        active: "active"
      }
    };
  }

  render() {
    return (
      <ListMenuOptions
        classNames={this.state.classNames}
        listItems={this.state.items}
        current={this.props.currentOption}
        handleOptionClick={this.props.handleOptionClick}
      />
    );
  }
}

export default SideMenuOptions;
