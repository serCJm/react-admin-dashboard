import React from "react";
import PostsMainItem from "./PostsMainItem";
import Pagination from "../../../../components/Pagination";
import image1 from "../../../../images/posts/photo-1543218241-f5f4e1cbf4e1.jpeg";
import image2 from "../../../../images/posts/photo-1543310465-f4d3ca5a2a25.jpeg";
import image3 from "../../../../images/posts/photo-1543246621-069371c3b075.jpeg";

const postConents = [
  {
    image: image1,
    title: "Cras vitae vulputate justo?",
    name: "Abraham Lincoln",
    authorStatus: " (guest author)",
    date: "Nov 11, 2017",
    readTime: "3",
    text:
      "Praesent vel quam a magna pulvinar elementum et a lorem. Donec eros mi, fringilla lacinia libero nec, porttitor hendrerit risus. Sed ut tempus urna",
    tag: "nature",
    comments: 50,
    shares: 25,
    likes: 60
  },
  {
    image: image2,
    title:
      "Donec dapibus aliquam felis. Pellentesque luctus at est at aliquam.",
    name: "Agatha Christie",
    authorStatus: "",
    date: "Nov 5, 2017",
    readTime: "5",
    text:
      "Nam vel imperdiet enim. Nulla maximus tellus non sapien rutrum imperdiet. Duis fringilla tempus urna vel suscipit. Suspendisse malesuada varius bibendum. Vivamus justo felis, facilisis nec maximus sed, suscipit id diam",
    tag: "travel",
    comments: 12,
    shares: 35,
    likes: 70
  },
  {
    image: image3,
    title: "Suspendisse ac vehicula neque, quis scelerisque augue.",
    name: "Albert Einstein",
    authorStatus: "",
    date: "Sept 15, 2017",
    readTime: "2",
    text:
      "Integer in volutpat nulla, at pulvinar quam. Sed nunc enim, tincidunt vel mauris at, mollis elementum sem. Nulla maximus porta ex, dignissim tristique nunc. Curabitur purus neque, condimentum in porta quis, commodo sit amet enim",
    tag: "hiking",
    comments: 40,
    shares: 15,
    likes: 90
  }
];

const PostsMain = () => {
  return (
    <div className="posts-main">
      {postConents.map(content => (
        <PostsMainItem key={content.title} content={content} />
      ))}
      <div className="pagination">
        <Pagination totalRecords={180} pageLimit={18} pageNeighbours={2} />
      </div>
    </div>
  );
};

export default PostsMain;
