import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const SocialSharedHeader = ({ contents }) => {
  let icon = null;
  if (contents.type === "event") {
    icon = <FontAwesomeIcon icon={faCalendarAlt} />;
  } else if (contents.type === "attachment") {
    icon = <FontAwesomeIcon icon={faAnchor} />;
  } else {
    icon = <FontAwesomeIcon icon={faVideo} />;
  }
  return (
    <div className="social-shared-header">
      <div className="social-shared-header-avatar-container">
        <img
          className="social-shared-header-avatar"
          src={contents.avatar}
          alt={contents.name}
          width={50}
          height={50}
        />
        <div className="social-shared-header-name">
          <h2 className="header">{contents.name + " " + contents.action}</h2>
          <p className="text">{contents.place}</p>
        </div>
      </div>
      <div className="social-shared-header-place">
        <p className="text">{icon}</p>
        <p className="text">{contents.time}</p>
      </div>
    </div>
  );
};

export default SocialSharedHeader;
