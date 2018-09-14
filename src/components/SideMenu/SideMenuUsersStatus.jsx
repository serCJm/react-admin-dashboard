import React from "react";
import AvatarItem from "../AvatarItem";

function SideMenuUsersStatus(props) {
  const users = props.users.map(user => (
    <AvatarItem
      key={user.name}
      name={user.name}
      avatar={user.image}
      avatarStyle={props.avatarStyle}
      classNames={props.classNames}
      selectedUser={props.selectedUser}
      handleSelectUser={props.handleSelectUser}
      status={props.status}
    />
  ));
  return (
    <div>
      <h2 className={props.classNames.title}>{`${props.status} (${
        props.users.length
      })`}</h2>
      {users}
    </div>
  );
}

export default SideMenuUsersStatus;
