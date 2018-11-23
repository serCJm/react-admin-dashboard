import React from "react";
import avatar from "../../../../images/avatar.jpg";

const SocialAvatar = () => {
  return (
    <div className="header-avatar">
      <img
        src={avatar}
        alt="developer"
        className="avatar"
        width={125}
        height={125}
      />
      <h1>CJ Moro</h1>
      <p className="job-title">Software Engineer</p>
      <hr className="social-hr" />
      <button className="follow-btn">Follow Me</button>
    </div>
  );
};

export default SocialAvatar;
