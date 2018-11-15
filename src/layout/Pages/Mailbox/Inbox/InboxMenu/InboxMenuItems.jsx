import React from "react";

const InboxMenuItems = ({ contents }) => {
  return (
    <ul>
      {contents.map(item => (
        <li
          key={item.title}
          className={item.active ? "sidemenu-item active" : "sidemenu-item"}
        >
          <div>
            <span className="submenu-item-icon">{item.icon}</span>

            <span>{item.title}</span>
          </div>
          {item.count > 0 ? (
            <span className="submenu-item-count">{item.count}</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default InboxMenuItems;
