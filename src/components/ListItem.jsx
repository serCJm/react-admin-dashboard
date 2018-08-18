import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoverOn: false
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleHover() {
    this.setState(prevStep => ({ isHoverOn: !prevStep.isHoverOn }));
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    let styleClass = this.props.classNames.li;

    // check if item id matches current tab to apply active class
    if (this.props.current === this.props.id) {
      styleClass += " " + this.props.classNames.active;
    } else if (this.state.isHoverOn) {
      styleClass += " " + this.props.classNames.hover;
    }

    return (
      <li
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        className={styleClass}
        onClick={this.handleClick}
      >
        {this.props.item}
      </li>
    );
  }
}

export default ListItem;
