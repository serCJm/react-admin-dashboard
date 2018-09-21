import React, { Component } from "react";
import HeaderControlsLangMenu from "./HeaderControlsLangMenu";
import usFlag from "../../images/us-flag.svg.png";
import frenchFlag from "../../images/french-flag.svg.png";
import italyFlag from "../../images/italy-flag.svg.png";
import germanFlag from "../../images/german-flag.svg.png";
import arabicFlag from "../../images/arabic-flag.svg.png";
import chineseFlag from "../../images/chinese-flag.svg.png";

const languages = [
  {
    flag: usFlag,
    title: "English"
  },
  {
    flag: frenchFlag,
    title: "French"
  },
  {
    flag: italyFlag,
    title: "Italian"
  },
  {
    flag: germanFlag,
    title: "German"
  },
  {
    flag: arabicFlag,
    title: "Arabic"
  },
  {
    flag: chineseFlag,
    title: "Chinese"
  }
];

class HeaderControlsLang extends Component {
  state = {
    current: "English",
    showMenu: false
  };

  handleChooseLocaleClick = (id, e) => {
    this.setState(prevState => ({
      current: id,
      showMenu: !prevState.showMenu
    }));
  };

  handleLangMenuClick = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };
  render() {
    let currentFlag;
    for (let lang of languages) {
      if (lang.title === this.state.current) {
        currentFlag = lang.flag;
      }
    }

    let headerControlsLangMenu = null;
    if (this.state.showMenu) {
      headerControlsLangMenu = (
        <HeaderControlsLangMenu
          languages={languages}
          handleChooseLocaleClick={this.handleChooseLocaleClick}
          current={this.state.current}
        />
      );
    }

    return (
      <div
        className="header-controls-item"
        onMouseEnter={this.handleLangMenuClick}
        onMouseLeave={this.handleLangMenuClick}
      >
        <img src={currentFlag} alt="us flag" width="35" height="30" />
        {headerControlsLangMenu}
      </div>
    );
  }
}

export default HeaderControlsLang;
