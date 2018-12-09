import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import SinglePostHeader from "./SinglePost/SinglePostHeader";
import SinglePostBody from "./SinglePost/SinglePostBody";

const SinglePost = () => {
  return (
    <PageElementWrapper>
      <SinglePostHeader />
      <SinglePostBody />
    </PageElementWrapper>
  );
};

export default SinglePost;
