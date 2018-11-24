import React from "react";
import SocialHeader from "./SocialHeader/SocialHeader";
import SocialThoughts from "./SocialThoughts/SocialThoughts";
import SocialDayPlan from "./SocialDayPlan/SocialDayPlan";

const Social = () => {
  return (
    <div className="social">
      <SocialHeader />
      <SocialThoughts />
      <SocialDayPlan />
      {/* <SocialEvent />
      <SocialMusicClip /> */}
    </div>
  );
};

export default Social;
