import React from "react";
import HeaderControlsLang from "./HeaderControlsLang";
import HeaderControlsProfile from "./HeaderControlsProfile";
import HeaderControlsNotifications from "./HeaderControlsNotifications";
const HeaderControls = props => {
  return (
    <div className="header-controls">
      <HeaderControlsLang />
      <HeaderControlsProfile />
      <HeaderControlsNotifications />
    </div>
  );
};

export default HeaderControls;
