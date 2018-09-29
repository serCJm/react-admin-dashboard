import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

const HeaderControlsBellItem = props => {
  const { avatar, status, time, title, message } = props.itemData;
  let timeIcon = <FontAwesomeIcon icon={faUserPlus} />;
  if (status === "new") {
    timeIcon = <FontAwesomeIcon icon={faComments} />;
  } else if (status === "alert") {
    timeIcon = <FontAwesomeIcon icon={faExclamation} />;
  }
  return (
    <li className="hover-menu-notifications-item">
      <div>
        <img
          className="hover-menu-notifications-avatar"
          src={avatar}
          alt="avatar"
          width="50"
          height="50"
        />
        {status ? (
          <p
            className={
              status === "new"
                ? "hover-menu-notifications-new"
                : "hover-menu-notifications-alert"
            }
          >
            {status}
          </p>
        ) : null}
      </div>
      <div className="hover-menu-notifications-info">
        <p className="hover-menu-notifications-info-time">
          <span className="hover-menu-notifications-info-time-icon">
            {timeIcon}
          </span>
          {time}
        </p>
        <h2 className="hover-menu-notifications-info-title">{title}</h2>
        <p className="hover-menu-notifications-info-message">{message}</p>
      </div>
    </li>
  );
};

export default HeaderControlsBellItem;
