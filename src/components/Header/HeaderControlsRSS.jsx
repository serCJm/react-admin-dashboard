import React from "react";
import HeaderHoverMenu from "./HeaderHoverMenu";
import HeaderControlsRSSItem from "./HeaderControlsRSSItem";
import SimpleBarChart from "../graphs/SimpleBarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    type: <FontAwesomeIcon icon={faStar} />,
    time: "an hour ago",
    user: "sparky",
    action: "starred",
    link: "express/node",
    message: "speed up server development"
  },
  {
    type: <FontAwesomeIcon icon={faComments} />,
    time: "2 hours ago",
    user: "akathebest",
    action: "commented",
    link: "issue #42",
    message: "we must solve it to find out"
  },
  {
    type: <FontAwesomeIcon icon={faCodeBranch} />,
    time: "3 days ago",
    user: "reactcoder",
    action: "forked",
    link: "facebook/react",
    message: "to practice/react"
  },
  {
    type: <FontAwesomeIcon icon={faExclamation} />,
    time: "lightyears ago",
    user: "emperor",
    action: "opened issue",
    link: "css/bootstrap#144",
    message: "Request support for all browsers"
  }
];

const dataCommits = [];
for (let i = 0; i < 31; i++) {
  const newNumber = Math.round(Math.random() * 100);
  dataCommits.push(newNumber);
}

const HeaderControlsBell = () => {
  return (
    <HeaderHoverMenu heading="Your News Feed" positionClass="rss-menu">
      <ul className="hover-menu-notifications">
        {data.map(item => (
          <HeaderControlsRSSItem key={item.time} itemData={item} />
        ))}
      </ul>
      <div>
        <h1 className="hover-menu-title">Your Commit Activity</h1>
        <div className="hover-menu-rss-commits-container">
          <SimpleBarChart
            data={dataCommits}
            width="300"
            height="90"
            margin={{ top: 10, right: 0 }}
            classNames={{ bar1: null, bar2: "hover-menu-rss-commits" }}
          />
        </div>
      </div>
    </HeaderHoverMenu>
  );
};

export default HeaderControlsBell;
