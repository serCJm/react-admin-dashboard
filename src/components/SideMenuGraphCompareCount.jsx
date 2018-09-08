import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMale } from "@fortawesome/free-solid-svg-icons";
import { faFemale } from "@fortawesome/free-solid-svg-icons";

const SideMenuGraphCompareCount = ({ type, total, active }) => {
  const icons = [];
  let icon =
    type === "male" ? (
      <FontAwesomeIcon icon={faMale} />
    ) : (
      <FontAwesomeIcon icon={faFemale} />
    );
  const iconsClassnames = ["icon", "icon-" + type];
  for (let i = 0; i < total; i++) {
    let className = "icon";
    if (i < active) {
      className = iconsClassnames.join(" ");
    }
    icons.push(
      <span key={i} className={className}>
        {icon}
      </span>
    );
  }
  return (
    <div className="gendre">
      <h1 className="title">{type}</h1>
      <div className="icons">{icons}</div>
    </div>
  );
};

export default SideMenuGraphCompareCount;
