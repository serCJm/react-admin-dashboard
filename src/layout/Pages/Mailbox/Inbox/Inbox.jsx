import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import InstrumentPanel from "./InstrumentPanel/InstrumentPanel";
import InboxMenu from "./InboxMenu/InboxMenu";
import InboxMail from "./InboxMail/InboxMail";

const Inbox = () => {
  return (
    <PageElementWrapper>
      <div className="inbox">
        <InstrumentPanel />
        <InboxMenu />
        <InboxMail />
      </div>
    </PageElementWrapper>
  );
};

export default Inbox;
