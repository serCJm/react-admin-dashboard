import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import InstrumentPanel from "./InstrumentPanel/InstrumentPanel";
import InboxMenu from "./InboxMenu/InboxMenu";

const Inbox = () => {
  return (
    <PageElementWrapper>
      <div className="inbox">
        <InstrumentPanel />
        <InboxMenu />
        {/* <InboxMail></InboxMail> */}
      </div>
    </PageElementWrapper>
  );
};

export default Inbox;
