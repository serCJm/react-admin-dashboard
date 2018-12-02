import React from "react";

const contents = [
  {
    title: "Vivamus at dolor eget leo tincidunt luctus.",
    time: "1 hour ago",
    name: "Abraham Lincoln"
  },
  {
    title: "Curabitur in vestibulum tortor.",
    time: "2 days ago",
    name: "Agatha Christie"
  },
  {
    title: "Aliquam augue velit",
    time: "3 weeks ago",
    name: "Albert Einstein"
  },
  {
    title: " Duis at sem ante. ",
    time: "4 months ago",
    name: "Cleopatra"
  }
];

const Posts = () => {
  return (
    <div className="trending-posts">
      <h1 className="header">Trending Posts</h1>
      {contents.map((content, i) => (
        <div key={i}>
          <h2 className="title">{content.title}</h2>
          <div className="f">
            <p className="time">{content.time} -</p>
            <p className="name">{content.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
