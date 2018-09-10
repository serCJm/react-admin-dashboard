import React from "react";

const AvatarItemSimple = props => {
  return (
    <div className="avatar-container">
      <img
        src={props.avatar}
        alt={`avatar ${props.name}`}
        width={36}
        height={36}
        className={`avatar-img ${props.style}`}
      />
      <p>{props.name}</p>
    </div>
  );
};

export default AvatarItemSimple;
