import React from "react";
import Location from "./Location";
import SocialAvatar from "./SocialAvatar";

const SocialHeader = () => {
  return (
    <div className="social-header">
      <Location />
      <SocialAvatar />
    </div>
  );
};

export default SocialHeader;
