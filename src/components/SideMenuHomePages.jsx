import React, { Component } from "react";
import SideMenuHomeList from "./SideMenuHomeList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

class SideMenuHomePages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          id: "dashboard",
          icon: <FontAwesomeIcon icon={faTachometerAlt} />,
          text: "Dashboard",
          submenu: null
        },
        {
          id: "mailbox",
          icon: <FontAwesomeIcon icon={faEnvelopeSquare} />,
          text: "Mailbox",
          countstyle: { color: "#fff", background: "rgb(46, 179, 152)" },
          submenu: [
            {
              id: "inbox",
              icon: <FontAwesomeIcon icon={faInbox} />,
              text: "Inbox"
            },
            {
              id: "mail",
              icon: <FontAwesomeIcon icon={faEnvelopeOpen} />,
              text: "Mail"
            },
            {
              id: "compose",
              icon: <FontAwesomeIcon icon={faEdit} />,
              text: "Compose"
            }
          ]
        },
        {
          id: "gallery",
          icon: <FontAwesomeIcon icon={faCameraRetro} />,
          text: "Gallery",
          submenu: null
        },
        {
          id: "social",
          icon: <FontAwesomeIcon icon={faUsers} />,
          text: "Social",
          submenu: null
        },
        {
          id: "blog",
          icon: <FontAwesomeIcon icon={faPencilAlt} />,
          text: "Blog",
          countstyle: { color: "#fff", background: "rgb(46, 179, 152)" },
          submenu: [
            {
              id: "posts",
              icon: <FontAwesomeIcon icon={faPaste} />,
              text: "Posts"
            },
            {
              id: "singlePost",
              icon: <FontAwesomeIcon icon={faClipboard} />,
              text: "Single Post"
            }
          ]
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
          listItems={this.state.pages}
          classNames={this.state.classNames}
          handleActivePage={this.props.handleActivePage}
          currentMenu={this.props.currentMenu}
        />
      </div>
    );
  }
}
export default SideMenuHomePages;
