import React, { Component } from "react";
import SideMenuHomeList from "./SideMenuHomeList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

class SideMenuHome extends Component {
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
          submenu: [
            {
              id: "dashboard",
              icon: <FontAwesomeIcon icon={faTachometerAlt} />,
              text: "Dashboard"
            },
            {
              id: "dashboard",
              icon: <FontAwesomeIcon icon={faTachometerAlt} />,
              text: "Dashboard"
            },
            {
              id: "dashboard",
              icon: <FontAwesomeIcon icon={faTachometerAlt} />,
              text: "Dashboard"
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
          submenu: [
            {
              id: "dashboard",
              icon: <FontAwesomeIcon icon={faTachometerAlt} />,
              text: "Dashboard"
            },
            {
              id: "dashboard",
              icon: <FontAwesomeIcon icon={faTachometerAlt} />,
              text: "Dashboard"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <h2>{Object.keys(this.state)[0]}</h2>,
      <SideMenuHomeList listItems={this.state.pages} />
    );
  }
}
export default SideMenuHome;
