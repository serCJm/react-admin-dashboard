import React from "react";
import imageAvatar from "../images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Avatar(props) {
  return (
    <div className="avatar">
      <img
        className="avatar-img"
        src={imageAvatar}
        style={{ width: 50, height: 50 }}
        alt="admin"
      />
      <div className="avatar-info">
        <h2 className="avatar-name">CJ Moro</h2>
        <div className="avatar-progress-bar field">
          <div className="avatar-progress-bar fill" />
        </div>
      </div>
      <span className="avatar-lock">
        <FontAwesomeIcon icon={faCoffee} />
      </span>
    </div>
  );
}

export default Avatar;
