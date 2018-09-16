import React from "react";
import HeaderControlsLang from "./HeaderControlsLang";
import HeaderControlsProfile from "./HeaderControlsProfile";
import HeaderControlsNotifications from "./HeaderControlsNotifications";
import HeaderControlsTheme from "./HeaderControlsTheme";

const HeaderControls = props => {
  return (
    <div className="header-controls">
      <HeaderControlsTheme />
      <HeaderControlsLang />
      <HeaderControlsProfile />
      <HeaderControlsNotifications />
    </div>
  );
};

export default HeaderControls;
