import React, { Component } from "react";
import SideMenuHomeList from "./SideMenuHomeList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

class SideMenuHomeExtras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extras: [
        {
          id: "login",
          icon: <FontAwesomeIcon icon={faSignInAlt} />,
          text: "Login",
          submenu: null
        },
        {
          id: "signup",
          icon: <FontAwesomeIcon icon={faUserPlus} />,
          text: "Sign Up",
          submenu: null
        },
        {
          id: "lock-page",
          icon: <FontAwesomeIcon icon={faUserLock} />,
          text: "Lock Page",
          submenu: null
        },
        {
          id: "invoice",
          icon: <FontAwesomeIcon icon={faReceipt} />,
          text: "Invoice",
          submenu: null
        },
        {
          id: "pricing-tables",
          icon: <FontAwesomeIcon icon={faDollarSign} />,
          text: "Pricing Tables",
          submenu: null
        }
      ],
      classNames: {
        title: "title",
        menuItem: "menu-item",
        text: "text",
        subParent: "submenu-parent",
        subMenu: "sub-menu",
        subMenuCount: "submenu-count",
        menuIcon: "menu-icon",
        hover: "hover",
        active: "active"
      }
    };
  }

  render() {
    return (
      <div>
        <h2 className={this.state.classNames.title}>
          {Object.keys(this.state)[0]}
        </h2>
        <SideMenuHomeList
          listItems={this.state.extras}
          classNames={this.state.classNames}
          handleActivePage={this.props.handleActivePage}
          currentMenu={this.props.currentMenu}
        />
      </div>
    );
  }
}
export default SideMenuHomeExtras;
