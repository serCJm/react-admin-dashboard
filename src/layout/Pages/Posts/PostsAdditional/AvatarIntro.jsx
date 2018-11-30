import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import avatar1 from "../../../../images/avatar1.jpg";

const AvatarIntro = () => {
  return (
    <PageElementWrapper>
      <div className="avatar-intro">
        <p className="text">Hello! I am CJ Moro and I love coding</p>
        <div className="avatar-img-container">
          <img
            className="avatar-img"
            src={avatar1}
            alt="CJ Moro"
            width={60}
            height={60}
          />
        </div>
      </div>
    </PageElementWrapper>
  );
};

export default AvatarIntro;
