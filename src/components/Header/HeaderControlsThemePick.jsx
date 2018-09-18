import React from "react";
import { ThemeContext, themes } from "./theme-context";

const HeaderControlsThemePick = props => {
  return (
    <div className="pick-theme" onClick={props.onClick}>
      <div className={`pick-theme-menu${props.animateOut}`}>
        <h1 className="pick-theme-title">Choose a theme:</h1>
        <div className="pick-theme-icons">
          <ThemeContext.Consumer>
            {({ handleThemeChange }) => {
              return Object.values(themes).map(theme => (
                <button
                  key={theme}
                  className={`pick-theme-btn ${theme}`}
                  onClick={() => handleThemeChange(theme)}
                />
              ));
            }}
          </ThemeContext.Consumer>
        </div>
      </div>
    </div>
  );
};

export default HeaderControlsThemePick;
