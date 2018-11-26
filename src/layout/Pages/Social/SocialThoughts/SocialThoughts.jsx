import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const SocialThoughts = () => {
  return (
    <PageElementWrapper classId="social-thoughts-wrapper">
      <div className="social-thoughts">
        <textarea className="text-box" placeholder="Where's my mind?" />
        <div className="social-thoughts-attachments">
          <div className="social-thoughts-icons">
            <span className="icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon={faCameraRetro} />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
          </div>
          <button className="social-thoughts-btn">SEND</button>
        </div>
      </div>
    </PageElementWrapper>
  );
};

export default SocialThoughts;
