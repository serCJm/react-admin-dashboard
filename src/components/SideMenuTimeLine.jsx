import React from "react";
import AvatarItemSimple from "./AvatarItemSimple";

const SideMenuTimeLine = ({ data, classNames }) => {
  console.log(data.avatar);
  return (
    <React.Fragment>
      <AvatarItemSimple
        name={data.name}
        avatar={data.avatar}
        classNames={classNames}
      />
    </React.Fragment>
  );
};

export default SideMenuTimeLine;
