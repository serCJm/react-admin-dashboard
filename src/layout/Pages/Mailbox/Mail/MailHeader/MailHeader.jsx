import React from "react";
import sender from "../../../../../images/avatar.jpg";

const MailHeader = () => {
  return (
    <div className="mail-header">
      <div className="mail-header-info">
        <img
          className="mail-header-avatar"
          src={sender}
          alt="sender"
          width={45}
          height={45}
        />
        <div>
          <h3>
            <strong>From:</strong> {`Look Skytalker = look_skyvars@example.com`}
          </h3>
          <p>
            <strong>Subject:</strong> {`Do you like to watch movies?`}
          </p>
        </div>
      </div>
      <div className="mail-header-date">
        <p className="mail-header-date-tag">tag name</p>
        <p>Aug 24, 12pm</p>
      </div>
    </div>
  );
};

export default MailHeader;
