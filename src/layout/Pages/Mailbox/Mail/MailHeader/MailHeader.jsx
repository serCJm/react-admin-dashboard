import React from "react";
import sender from "../../../../../images/avatar.jpg";

const MailHeader = () => {
  return (
    <div className="mail-header">
      <img src={sender} alt="sender" width={45} height={45} />
      <div>
        <h3>
          <strong>From:</strong> {`Look Skytalker = look_skyvars@example.com`}
          <p>
            <strong>Subject:</strong> {`Do you like to watch movies?`}
          </p>
        </h3>
      </div>
      <div>
        <p>tag name</p>
        <p>Aug 24, 12pm</p>
      </div>
    </div>
  );
};

export default MailHeader;
