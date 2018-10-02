import React, { Component } from "react";
import { ThemeContext } from "../Header/theme-context.js";
import { Link } from "react-router-dom";

class SideMenuHomeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoverOn: false,
      showSubmenu: false,
      closeSubmenu: null
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleSubmenuClick = this.handleSubmenuClick.bind(this);
    this.handleActivePage = this.handleActivePage.bind(this);
  }

  handleHover() {
    this.setState(prevStep => ({ isHoverOn: !prevStep.isHoverOn }));
  }

  handleSubmenuClick() {
    if (this.state.closeSubmenu === null) {
      this.setState({ closeSubmenu: false });
    } else {
      this.setState(prevStep => ({ closeSubmenu: !prevStep.closeSubmenu }));
    }
    this.setState(prevStep => ({ showSubmenu: !prevStep.showSubmenu }));
  }

  handleActivePage() {
    this.props.handleActivePage(this.props.id);
  }

  render() {
    const {
      id,
      icon,
      text,
      submenu,
      classNames,
      countstyle,
      currentMenu
    } = this.props;

    let listItemStyle = classNames.menuItem;

    // check if item id matches current tab to apply active class
    if (currentMenu === id) {
      listItemStyle += " " + classNames.active;
    } else if (this.state.isHoverOn) {
      listItemStyle += " " + classNames.hover;
    }

    if (submenu && this.state.showSubmenu) {
      listItemStyle += " " + classNames.subParent + " open-submenu";
    } else if (submenu) {
      listItemStyle += " " + classNames.subParent;
    }

    return (
      <li>
        <ThemeContext>
          {({ theme }) => (
            <Link
              to={id === "dashboard" ? "/" : `/${id}`}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
              className={`${
                this.state.closeSubmenu
                  ? listItemStyle + " animate-close"
                  : listItemStyle
              } ${theme}
              `}
              onClick={
                submenu ? this.handleSubmenuClick : this.handleActivePage
              }
            >
              <span className={classNames.menuIcon}>{icon}</span>
              <span className={classNames.text}>{text}</span>
              {submenu ? (
                <span className={classNames.subMenuCount} style={countstyle}>
                  {submenu.length}
                </span>
              ) : null}
            </Link>
          )}
        </ThemeContext>
        {submenu && this.state.showSubmenu ? (
          <ul className={classNames.subMenu + " animate-open"}>{submenu}</ul>
        ) : null}
      </li>
    );
  }
}

export default SideMenuHomeItem;
