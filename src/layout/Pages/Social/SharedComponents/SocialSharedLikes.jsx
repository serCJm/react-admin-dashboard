import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const SocialSharedLikes = ({ likes }) => {
  return (
    <div className="social-shared-likes">
      <button className="like-btn">
        <FontAwesomeIcon icon={faThumbsUp} /> Like
      </button>
      <p className="text">
        <strong>{likes}</strong> people like this
      </p>
    </div>
  );
};

export default SocialSharedLikes;
