import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const SinglePostHeader = () => {
  return (
    <div className="fcc single-post-header">
      <h1 className="heading">Aenean varius rutrum lorem</h1>
      <p className="text heading-text">
        Curabitur maximus felis sit amet velit luctus hendrerit. Maecenas
        mollis, urna vitae vehicula sollicitudin, urna odio commodo nibh,
        viverra venenatis diam velit at turpis. Nam porta aliquam ligula.
      </p>
      <div className="fsa m2 icons">
        <span className="fc br icon fb">
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
        <span className="fc br icon tw">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        <span className="fc br icon gplus">
          <FontAwesomeIcon icon={faGooglePlusG} />
        </span>
        <span className="fc br icon insta">
          <FontAwesomeIcon icon={faInstagram} />
        </span>
      </div>
    </div>
  );
};

export default SinglePostHeader;
