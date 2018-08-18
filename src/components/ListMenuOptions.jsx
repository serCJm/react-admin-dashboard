import React from "react";
import ListMenuOptionsItem from "./ListMenuOptionsItem";

function ListMenuOptions(props) {
  const listItems = props.listItems.map(item => (
    <ListMenuOptionsItem
      id={item.id}
      current={props.current}
      key={item.id}
      item={item.item}
      classNames={props.classNames}
      onClick={props.onClick}
    />
  ));
  return <ul className={props.classNames.ul}>{listItems}</ul>;
}

export default ListMenuOptions;
