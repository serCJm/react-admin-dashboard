import React from "react";

const SocialSharedComments = ({ comments }) => {
  return (
    <div className="shared-comments">
      <ul>
        {comments.map((comment, i) => (
          <li className="shared-comments-item" key={i + comment.name}>
            <div className="shared-comments-user-container">
              <img
                className="avatar"
                src={comment.avatar}
                alt={comment.name}
                width={40}
                height={40}
              />
              <div>
                <p className="header">{comment.name}</p>
                <p className="text">{comment.comment}</p>
              </div>
            </div>
            <p className="shared-comments-time">
              <strong>{comment.time}</strong>
            </p>
          </li>
        ))}
      </ul>
      <textarea className="text-box" placeholder="Write a comment..." />
    </div>
  );
};

export default SocialSharedComments;
