import React from "react";

const HeaderControlsBellItem = props => {
  const { type, time, user, action, link, message } = props.itemData;

  return (
    <li className="hover-menu-notifications-item">
      <div>
        <span className="hover-menu-rss-type">{type}</span>
      </div>
      <div className="hover-menu-notifications-info">
        <p className="hover-menu-notifications-info-time">{time}</p>
        <p className="hover-menu-rss-action">
          <span className="hover-menu-notifications-info-title">{`@${user}`}</span>
          {` ${action} `}
          <span className="hover-menu-rss-link">{link}</span>
        </p>
        <p className="hover-menu-notifications-info-message">{message}</p>
      </div>
    </li>
  );
};

export default HeaderControlsBellItem;
