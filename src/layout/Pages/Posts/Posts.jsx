import React from "react";
import PostsMain from "./PostsMain/PostsMain";
import PostsAdditional from "./PostsAdditional/PostsAdditional";

const Posts = () => {
  return (
    <div className="posts">
      <PostsMain />
      <PostsAdditional />
    </div>
  );
};

export default Posts;
