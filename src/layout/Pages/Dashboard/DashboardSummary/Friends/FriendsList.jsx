import React from "react";

const FriendsList = ({ content, handleClick }) => {
  const inviteBtnClass = "friends-row-btn ";
  return (
    <div>
      {content.map((data, i) => (
        <div className="friends-row" key={data.name + i}>
          <img
            className="friends-row-img"
            src={data.image}
            width={45}
            height={45}
            alt="friend-name"
          />
          <p className="friends-row-name">{data.name}</p>
          <button
            className={
              data.status
                ? inviteBtnClass + "invited"
                : inviteBtnClass + "invite"
            }
            onClick={e => handleClick(i, e)}
          >
            {data.status ? "invited" : "invite"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
