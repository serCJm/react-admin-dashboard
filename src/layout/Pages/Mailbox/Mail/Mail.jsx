import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import InstrumentPanel from "../Inbox/InstrumentPanel/InstrumentPanel";
import MailHeader from "./MailHeader/MailHeader";
import MailBody from "./MailBody/MailBody";

const Mail = () => {
  return (
    <PageElementWrapper>
      <div className="mail">
        <InstrumentPanel />
        <MailHeader />
        <MailBody />
      </div>
    </PageElementWrapper>
  );
};

export default Mail;
