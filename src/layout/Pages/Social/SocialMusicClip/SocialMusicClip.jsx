import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import SocialSharedHeader from "../SharedComponents/SocialSharedHeader";
import SocialSharedLikes from "../SharedComponents/SocialSharedLikes";
import SocialSharedComments from "../SharedComponents/SocialSharedComments";
import avatar7 from "../../../../images/avatar7.jpg";
import avatar8 from "../../../../images/avatar8.jpg";
import avatar10 from "../../../../images/avatar10.jpg";

const socialHeaderContents = {
  type: "video",
  avatar: avatar7,
  name: "Queen Elizabeth II",
  action: "",
  place: "The Moon, Near Earth",
  time: "5 hours ago"
};

const comments = [
  {
    avatar: avatar8,
    name: "Muhammad Ali",
    comment: "Curabitur pretium egestas lorem. ",
    time: "2 hours ago"
  },
  {
    avatar: avatar10,
    name: "Leonardo Da Vinci",
    comment: "Vivamus dictum volutpat feugiat.",
    time: "20 minites ago"
  }
];

const SocialMusicClip = () => {
  return (
    <PageElementWrapper>
      <SocialSharedHeader contents={socialHeaderContents} />
      <div className="social-event">
        <h2 className="header">
          Sed sapien ipsum, dignissim eget pharetra eget, tincidunt vitae dolor.
        </h2>
      </div>
      <div className="embed-video-container">
        <iframe
          className="embed-video"
          title="glitch-mob"
          src="https://www.youtube.com/embed/tVqPx5mUj0g"
          width="853"
          height="480"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <SocialSharedLikes likes="400" />
      <SocialSharedComments comments={comments} />
    </PageElementWrapper>
  );
};

export default SocialMusicClip;
