import React, { Component } from "react";

class AvatarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoverOn: false
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleSelectUser = this.handleSelectUser.bind(this);
  }

  handleHover() {
    this.setState(prevStep => ({ isHoverOn: !prevStep.isHoverOn }));
  }

  handleSelectUser() {
    this.props.handleSelectUser(this.props.name);
  }

  render() {
    let divStyle = this.props.classNames.user;

    if (this.props.name === this.props.selectedUser) {
      divStyle += ` ${this.props.classNames.active}`;
    } else if (this.state.isHoverOn) {
      divStyle += ` ${this.props.classNames.hover}`;
    }

    return (
      <div
        style={{ position: "relative" }}
        className={divStyle}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onClick={this.handleSelectUser}
      >
        {/* shade offline section */}
        {this.props.status === "offline" ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              background: "rgba(39, 49, 53, .5)",
              width: "100%",
              height: "100%"
            }}
          />
        ) : null}
        <img
          src={this.props.avatar}
          alt={`avatar ${this.props.name}`}
          style={this.props.avatarStyle}
          className={this.props.classNames.avatar}
        />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default AvatarItem;
