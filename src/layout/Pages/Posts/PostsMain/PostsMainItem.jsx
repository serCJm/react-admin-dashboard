import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faComment,
  faShareAlt,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const PostsMainItem = ({ content }) => {
  return (
    <PageElementWrapper>
      <div
        style={{
          background: `url(${content.image}) center/cover no-repeat`,
          height: "20rem"
        }}
      />
      <div className="post-text-content">
        <h1 className="h1-header">{content.title}</h1>
        <div className="container--between info-text">
          <p>
            by{" "}
            <span className="text--green">
              {content.name + content.authorStatus}
            </span>{" "}
            / {content.date}
          </p>
          <p className="read-time">
            <span>
              <FontAwesomeIcon icon={faClock} />{" "}
            </span>
            {content.readTime} minutes read
          </p>
        </div>
        <p className="text">{content.text}...</p>
        <h2 className="text--green">Read More</h2>
      </div>
      <div className="container--between post-metrics">
        <p className="tag">#{content.tag}</p>
        <div className="container--between share-icons">
          <span>
            <FontAwesomeIcon icon={faComment} /> {content.comments}
          </span>
          <span>
            <FontAwesomeIcon icon={faShareAlt} /> {content.shares}
          </span>
          <span className="likes">
            <FontAwesomeIcon icon={faHeart} /> {content.likes}
          </span>
        </div>
      </div>
    </PageElementWrapper>
  );
};

export default PostsMainItem;
