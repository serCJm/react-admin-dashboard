import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import SocialSharedHeader from "../SharedComponents/SocialSharedHeader";
import SocialSharedLikes from "../SharedComponents/SocialSharedLikes";
import SocialSharedComments from "../SharedComponents/SocialSharedComments";
import avatar1 from "../../../../images/avatar1.jpg";
import { ReactBingmaps } from "react-bingmaps";

const socialHeaderContents = {
  type: "event",
  avatar: avatar1,
  name: "Abraham Lincoln",
  action: "created an event",
  place: "Mars, Solar System",
  time: "3 hours ago"
};

const comments = [];

const SocialDayPlan = () => {
  return (
    <PageElementWrapper classId="social-daily-plan-wrapper">
      <SocialSharedHeader contents={socialHeaderContents} />
      <div className="social-daily-plan">
        <h1 className="header">Coding challenge at my home</h1>
        <p className="text">December 31, 2018</p>
        <p className="text">Sillicon Valley, USA</p>
      </div>
      <div className="social-daily-map">
        <ReactBingmaps
          bingmapKey={process.env.REACT_APP_BING_KEY}
          center={[37.37, -122.04]}
          pushPins={[
            {
              location: [37.37, -122.04],
              option: { color: "red" }
            }
          ]}
        />
      </div>
      <SocialSharedLikes likes="500" />
      <SocialSharedComments comments={comments} />
    </PageElementWrapper>
  );
};

export default SocialDayPlan;
