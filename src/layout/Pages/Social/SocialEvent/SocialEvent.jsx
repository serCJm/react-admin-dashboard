import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import SocialSharedHeader from "../SharedComponents/SocialSharedHeader";
import SocialSharedLikes from "../SharedComponents/SocialSharedLikes";
import SocialSharedComments from "../SharedComponents/SocialSharedComments";
import avatar2 from "../../../../images/avatar2.jpg";
import avatar3 from "../../../../images/avatar3.jpg";
import avatar4 from "../../../../images/avatar4.jpg";
import avatar5 from "../../../../images/avatar5.jpg";
import img from "../../../../images/patrick-doyle-1173554-unsplash.jpg";

const socialHeaderContents = {
  type: "attachment",
  avatar: avatar2,
  name: "Agatha Christie",
  action: "",
  place: "Venus, Solar System",
  time: "2 hours ago"
};

const comments = [
  {
    avatar: avatar5,
    name: "Benjamin Franklin",
    comment: "Ut fermentum pellentesque ipsum, in ultricies urna tempor vel.",
    time: "1 hour ago"
  },
  {
    avatar: avatar4,
    name: "Cleopatra",
    comment: "Maecenas ultricies lobortis ultrices. Integer magna odio",
    time: "2 minites ago"
  },
  {
    avatar: avatar3,
    name: "Albert Einstein",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "a few seconds ago"
  }
];

const SocialEvent = () => {
  return (
    <PageElementWrapper classId="social-event-wrapper">
      <SocialSharedHeader contents={socialHeaderContents} />
      <div className="social-event">
        <p className="text">
          Aren't you a little short to be a stormtrooper? What? Oh...the
          uniform. I'm Luke Skywalker. I'm here to rescue you. You're who? I'm
          here to rescue you. I've got your R2 unit. I'm here with Ben Kenobi.
          Ben Kenobi is here! Where is he? Come on!
        </p>
      </div>
      <img
        className="social-event-image"
        src={img}
        alt="social-event"
        width={500}
        height={500}
      />
      <SocialSharedLikes likes="1000" />
      <SocialSharedComments comments={comments} />
    </PageElementWrapper>
  );
};

export default SocialEvent;
