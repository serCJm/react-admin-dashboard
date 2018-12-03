import React from "react";
import PageElementWrapper from "../../../PageElementWrapper";
import Posts from "./Posts";
import Tags from "./Tags";

const TrendingPosts = () => {
  return (
    <PageElementWrapper>
      <Posts />
      <Tags />
    </PageElementWrapper>
  );
};

export default TrendingPosts;
