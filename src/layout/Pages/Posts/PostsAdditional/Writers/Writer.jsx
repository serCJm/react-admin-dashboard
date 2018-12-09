import React from "react";
import avatar1 from "../../../../../images/avatar1.jpg";
import avatar2 from "../../../../../images/avatar2.jpg";
import avatar3 from "../../../../../images/avatar3.jpg";
import avatar4 from "../../../../../images/avatar4.jpg";

const contents = [
  {
    avatar: avatar1,
    name: "Abraham Lincoln"
  },
  { avatar: avatar2, name: "Agatha Christie" },
  { avatar: avatar3, name: "Albert Einstein" },
  { avatar: avatar4, name: "Cleopatra" }
];

const Writer = () => {
  return (
    <div className="our-writers">
      <h1 className="header">Our Writers</h1>
      {contents.map((content, i) => (
        <div className="f" key={i}>
          <img
            className="br"
            src={content.avatar}
            alt={content.name}
            widht={45}
            height={45}
          />
          <p className="writer-name">{content.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Writer;
