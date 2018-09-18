import React from "react";

const themes = [
  "theme-default",
  "theme-green",
  "theme-blue",
  "theme-purple",
  "theme-brown",
  "theme-bay"
];

const HeaderControlsThemePick = props => {
  return (
    <div className="pick-theme" onClick={props.onClick}>
      <div className={`pick-theme-menu${props.animateOut}`}>
        <h1 className="pick-theme-title">Choose a theme:</h1>
        <div className="pick-theme-icons">
          {themes.map(theme => (
            <button key={theme} className={`pick-theme-btn ${theme}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderControlsThemePick;
