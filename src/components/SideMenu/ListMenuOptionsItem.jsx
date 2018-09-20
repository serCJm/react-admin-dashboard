import React from "react";
import { ThemeContext } from "../Header/theme-context.js";

const ListMenuOptionsItem = props => {
  let styleClass = props.classNames.li;

  // check if item id matches current tab to apply active class
  if (props.current === props.id) {
    styleClass += " " + props.classNames.active;
  }
  return (
    <ThemeContext>
      {({ theme }) => (
        <li
          className={`${styleClass} ${theme}`}
          onClick={() => props.handleOptionClick(props.id)}
        >
          {props.item}
        </li>
      )}
    </ThemeContext>
  );
};

export default ListMenuOptionsItem;
