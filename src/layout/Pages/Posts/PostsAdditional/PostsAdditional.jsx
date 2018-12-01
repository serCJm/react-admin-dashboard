import React from "react";
import AvatarIntro from "./AvatarIntro";
import SocialShares from "./SocialShares";

const PostsAdditional = () => {
  return (
    <div className="posts-additional">
      <AvatarIntro />
      <SocialShares />
      {/* <TrendingPosts />
      <Writers /> */}
    </div>
  );
};

export default PostsAdditional;
