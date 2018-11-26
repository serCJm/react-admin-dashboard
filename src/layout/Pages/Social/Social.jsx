import React from "react";
import SocialHeader from "./SocialHeader/SocialHeader";
import SocialThoughts from "./SocialThoughts/SocialThoughts";
import SocialDayPlan from "./SocialDayPlan/SocialDayPlan";
import SocialEvent from "./SocialEvent/SocialEvent";
import SocialMusicClip from "./SocialMusicClip/SocialMusicClip";

const Social = () => {
  return (
    <div className="social">
      <SocialHeader />
      <div className="social-content">
        <SocialThoughts />
        <SocialDayPlan />
        <SocialEvent />
        <SocialMusicClip />
      </div>
    </div>
  );
};

export default Social;
