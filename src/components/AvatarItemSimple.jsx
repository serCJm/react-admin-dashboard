import React from "react";

const AvatarItemSimple = props => {
  return (
    <div>
      <img
        src={props.avatar}
        alt={`avatar ${props.name}`}
        // style={this.props.avatarStyle}
        // className={this.props.classNames.avatar}
        width={75}
        height={75}
      />
      <p>{props.name}</p>
    </div>
  );
};

export default AvatarItemSimple;
