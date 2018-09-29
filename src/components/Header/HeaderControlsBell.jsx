import React from "react";
import HeaderHoverMenu from "./HeaderHoverMenu";
import HeaderControlsBellItem from "./HeaderControlsBellItem";
import avatar1 from "../../images/avatar1.jpg";
import avatar2 from "../../images/avatar2.jpg";
import avatar4 from "../../images/avatar4.jpg";

const data = [
  {
    avatar: avatar1,
    status: "new",
    time: "an hour ago",
    title: "Hon One sent you a private message",
    message:
      "What up dog? That anti-matter drive is almost ready so we are gonna fly that baby pretty soon..."
  },
  {
    avatar: avatar2,
    status: "",
    time: "2 hours ago",
    title: "Mike Spike just added you as a master of the galaxy",
    message: "to the galaxy dashboard..."
  },
  {
    avatar: avatar4,
    status: "alert",
    time: "3 days ago",
    title: "Hon One sent you a private message",
    message:
      "What up dog? That anti-matter drive is almost ready so we are gonna fly that baby pretty soon..."
  }
];

const HeaderControlsBell = () => {
  return (
    <HeaderHoverMenu
      heading="Your Notifications"
      positionClass="notifications-menu"
    >
      <ul className="hover-menu-notifications">
        {data.map(item => (
          <HeaderControlsBellItem key={item.time} itemData={item} />
        ))}
      </ul>
      <div>
        <button className="hover-menu-notifications-btn">Mark All Read</button>
        <button className="hover-menu-notifications-btn">View All</button>
      </div>
    </HeaderHoverMenu>
  );
};

export default HeaderControlsBell;
