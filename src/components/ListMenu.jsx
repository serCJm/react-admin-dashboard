import React from "react";
import ListItem from "./ListItem";

function ListMenu(props) {
  const listItems = props.listItems.map(item => (
    <ListItem
      id={item.id}
      current={props.current}
      key={item.id}
      item={item.item}
      classNames={props.classNames}
    />
  ));
  return <ul className={props.classNames.ul}>{listItems}</ul>;
}

export default ListMenu;
