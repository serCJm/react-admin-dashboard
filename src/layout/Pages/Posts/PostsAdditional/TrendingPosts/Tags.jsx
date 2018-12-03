import React from "react";

const contents = [
  "css",
  "travel",
  "programming",
  "javascript",
  "html",
  "node",
  "python",
  "food",
  "science",
  "development",
  "neural networks",
  "react"
];

const Tags = () => {
  return (
    <div className="trending-tags">
      {contents.map((content, i) => (
        <a key={i} className="tag">
          {content}
        </a>
      ))}
    </div>
  );
};

export default Tags;
