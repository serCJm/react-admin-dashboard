import React from "react";

const SocialSharedComments = ({ comments }) => {
  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li>
            <div>
              <img src={comment.avatar} alt={comment.name} />
              <div>
                <p>{comment.name}</p>
                <p>{comment.comment}</p>
              </div>
            </div>
            <p>{comment.time}</p>
          </li>
        ))}
      </ul>
      <textarea className="text-box" placeholder="Write a comment..." />
    </div>
  );
};

export default SocialSharedComments;
