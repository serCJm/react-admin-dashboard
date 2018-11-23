import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const SocialThoughts = () => {
  return (
    <PageElementWrapper>
      <div className="social-thoughts">
        <textarea className="mail-reply-text" placeholder="Where's my mind?" />
        <div className="social-thoughts-attachments">
          <div className="social-thoughts-icons">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <FontAwesomeIcon icon={faCameraRetro} />
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <button className="social-thoughts-btn">SEND</button>
        </div>
      </div>
    </PageElementWrapper>
  );
};

export default SocialThoughts;
