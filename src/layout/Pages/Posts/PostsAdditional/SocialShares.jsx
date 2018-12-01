import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitterSquare,
  faGooglePlusG,
  faDribbble,
  faFlickr,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const SocialShares = () => {
  return (
    <PageElementWrapper>
      <div className="fsa br social-shares">
        <button className="br btn btn--fb">
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        <button className="br btn btn--tw">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </button>
        <button className="br btn btn--gplus">
          <FontAwesomeIcon icon={faGooglePlusG} />
        </button>
        <button className="br btn btn--dr">
          <FontAwesomeIcon icon={faDribbble} />
        </button>
        <button className="br btn btn--fl">
          <FontAwesomeIcon icon={faFlickr} />
        </button>
        <button className="br btn btn--inst">
          <FontAwesomeIcon icon={faInstagram} />
        </button>
      </div>
    </PageElementWrapper>
  );
};

export default SocialShares;
