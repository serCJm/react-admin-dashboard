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
          id: "lock",
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

    this.baseState = this.state.extras;
    this.filterMenu = this.filterMenu.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      this.filterMenu();
    }
  }

  filterMenu() {
    const searchTerm = this.props.search;
    // deep clone an array
    // otherwise, slice and spread operator shallow clone
    const pages = this.baseState.map(a => Object.assign({}, a));
    const filtered = pages.filter(function f(item) {
      if (item.submenu) {
        item.submenu = item.submenu.filter(f);
        if (item.submenu.length > 0) {
          return true;
        }
      }
      if (item.text.toLowerCase().search(searchTerm.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({ extras: filtered });
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
