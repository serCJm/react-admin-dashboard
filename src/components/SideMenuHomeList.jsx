import React from "react";
import SideMenuHomeItem from "./SideMenuHomeItem";

function SideMenuHomeList(props) {
  const listItems = props.listItems.map(item => (
    <SideMenuHomeItem
      id={item.id}
      key={item.id}
      icon={item.icon}
      text={item.text}
      //classNames={props.classNames}
      // onClick={props.onClick}
    />
  ));
  return <ul>{listItems}</ul>;
}

export default SideMenuHomeList;
