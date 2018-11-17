import React from "react";
import PageElementWrapper from "../../PageElementWrapper";
import InstrumentPanel from "../Inbox/InstrumentPanel/InstrumentPanel";
import MailHeader from "./MailHeader/MailHeader";
import MailBody from "./MailBody/MailBody";
import MailAttachments from "./MailAttachments/MailAttachments";
import MailReplyBox from "./MailReplyBox/MailReplyBox";

const Mail = () => {
  return (
    <PageElementWrapper>
      <div className="mail">
        <InstrumentPanel />
        <MailHeader />
        <MailBody />
        <MailAttachments />
        <MailReplyBox />
      </div>
    </PageElementWrapper>
  );
};

export default Mail;
