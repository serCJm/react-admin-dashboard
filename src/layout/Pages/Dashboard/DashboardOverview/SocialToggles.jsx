import React from "react";
import SocialTogglesRow from "./SocialTogglesRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const contents = [
  { icon: <FontAwesomeIcon icon={faTwitter} />, text: "twitter" },
  { icon: <FontAwesomeIcon icon={faFacebookF} />, text: "facebook" },
  { icon: <FontAwesomeIcon icon={faGooglePlusG} />, text: "google-plus" },
  { icon: <FontAwesomeIcon icon={faLinkedinIn} />, text: "linkedin" },
  { icon: <FontAwesomeIcon icon={faInstagram} />, text: "instagram" }
];

const SocialToggles = () => {
  return (
    <table className="social-toggles">
      <tbody>
        <SocialTogglesRow contents={contents} />
      </tbody>
    </table>
  );
};

export default SocialToggles;
