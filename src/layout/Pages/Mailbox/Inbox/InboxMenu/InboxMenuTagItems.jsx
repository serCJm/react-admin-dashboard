import React from "react";

const InboxMenuTagItems = ({ contents }) => {
  return (
    <ul>
      {contents.map(item => (
        <li
          key={item.title}
          className={item.active ? "sidemenu-item active" : "sidemenu-item"}
        >
          <div>
            <span className={`submenu-item-tag ${item.colorClalss}`}>
              {item.icon}
            </span>

            <span>{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InboxMenuTagItems;
