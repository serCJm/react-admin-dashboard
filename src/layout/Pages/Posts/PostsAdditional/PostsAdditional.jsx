import React from "react";
import AvatarIntro from "./AvatarIntro";
import SocialShares from "./SocialShares";
import TrendingPosts from "./TrendingPosts/TrendingPosts";
import Writers from "./Writers/Writers";

const PostsAdditional = () => {
  return (
    <div className="posts-additional">
      <AvatarIntro />
      <SocialShares />
      <TrendingPosts />
      <Writers />
    </div>
  );
};

export default PostsAdditional;
