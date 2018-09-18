import React, { Component } from "react";
import HeaderTopMenu from "../components/Header/HeaderTopMenu";
import SideMenu from "../components/SideMenu/SideMenu";
import HeaderMenuBtn from "../components/Header/HeaderMenuBtn";
import { ThemeContext, themes } from "../components/Header/theme-context";

class Header extends Component {
  state = {
    mobile: window.matchMedia("(max-width: 800px)").matches,
    theme: themes.default
  };

  hangleScreenResize = () => {
    const mq = window.matchMedia("(max-width: 800px)").matches;
    this.setState({ mobile: mq });
  };

  componentDidMount() {
    window.addEventListener("resize", this.hangleScreenResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.hangleScreenResize);
  }

  render() {
    let headerMenuBtn = null;
    if (this.state.mobile) {
      headerMenuBtn = <HeaderMenuBtn onClick={this.props.toggleSideMenu} />;
    }
    return (
      <header>
        <ThemeContext.Provider value={this.state.theme}>
          <HeaderTopMenu
            logo="Logo"
            headerMenuBtn={headerMenuBtn}
            sideMenu={this.props.sideMenu}
            mobile={this.state.mobile}
          />
          <SideMenu sideMenu={this.props.sideMenu} mobile={this.state.mobile} />
        </ThemeContext.Provider>
      </header>
    );
  }
}

export default Header;
