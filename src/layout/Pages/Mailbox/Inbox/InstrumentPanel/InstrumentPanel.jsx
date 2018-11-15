import React from "react";
import InstrumentControls from "./InstrumentControls";
import AvatarItemSimple from "../../../../../components/AvatarItemSimple";
import avatarImg from "../../../../../images/avatar.jpg";

const InstrumentPanel = () => {
  return (
    <div className="instrument-panel">
      <InstrumentControls />
      <AvatarItemSimple
        avatar={avatarImg}
        styleClass={"inbox-avatar"}
        name="CJ Moro"
      />
    </div>
  );
};

export default InstrumentPanel;
