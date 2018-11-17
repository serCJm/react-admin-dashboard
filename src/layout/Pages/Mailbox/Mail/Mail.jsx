import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import InstrumentPanel from "../Inbox/InstrumentPanel/InstrumentPanel";
import MailHeader from "./MailHeader/MailHeader";

const Mail = () => {
  return (
    <PageElementWrapper>
      <div className="mail">
        <InstrumentPanel />
        <MailHeader />
      </div>
    </PageElementWrapper>
  );
};

export default Mail;
