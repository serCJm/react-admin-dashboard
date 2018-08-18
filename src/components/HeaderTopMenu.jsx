import React, { Component } from "react";
import HeaderMenuBtn from "../components/HeaderMenuBtn";
import HeaderLogoutBtn from "../components/HeaderLogoutBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain } from "@fortawesome/free-solid-svg-icons";

class HeaderTopMenu extends Component {
  render() {
    return (
      <div className="header-top-menu">
        <HeaderMenuBtn />
        <h1 className="logo">
          <FontAwesomeIcon icon={faTrain} transform="left-8" />
          {this.props.logo}
        </h1>
        <HeaderLogoutBtn />
      </div>
    );
  }
}

export default HeaderTopMenu;
