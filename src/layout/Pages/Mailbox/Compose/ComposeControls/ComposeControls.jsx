import React from "react";
import ComposeButtons from "./ComposeButtons";
import AvatarItemSimple from "../../../../../components/AvatarItemSimple";
import avatarImg from "../../../../../images/avatar.jpg";

const ComposeControls = () => {
  return (
    <div className="compose-controls">
      <ComposeButtons />
      <AvatarItemSimple
        avatar={avatarImg}
        styleClass={"inbox-avatar"}
        name="CJ Moro"
      />
    </div>
  );
};

export default ComposeControls;
