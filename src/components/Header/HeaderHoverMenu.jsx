import React from "react";
import { ThemeContext } from "./theme-context";

const HeaderHoverMenu = props => {
  return (
    <ThemeContext>
      {({ theme }) => (
        <div className={`hover-menu ${theme} ${props.positionClass}`}>
          <h1 className="hover-menu-title">{props.heading}</h1>
          {props.children}
        </div>
      )}
    </ThemeContext>
  );
};

export default HeaderHoverMenu;
