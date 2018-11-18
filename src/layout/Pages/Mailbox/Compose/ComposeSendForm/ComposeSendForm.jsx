import React from "react";

const ComposeSendForm = () => {
  return (
    <form className="compose-send-form">
      <fieldset className="compose-send-item">
        <legend style={{ display: "none" }} />
        <label className="compose-send-label">To</label>
        <input
          className="compose-send-input"
          type="text"
          placeholder="Ex: sender@example.com"
          required
        />
      </fieldset>
      <fieldset className="compose-send-item">
        <legend style={{ display: "none" }} />
        <label className="compose-send-label">CC</label>
        <input className="compose-send-input" type="text" />
      </fieldset>
      <fieldset className="compose-send-item">
        <legend style={{ display: "none" }} />
        <label className="compose-send-label">BCC</label>
        <input className="compose-send-input" type="text" />
      </fieldset>
      <fieldset className="compose-send-item">
        <legend style={{ display: "none" }} />
        <label className="compose-send-label">Subject</label>
        <input
          className="compose-send-input"
          type="text"
          placeholder="Enter Subject Line Here"
          required
        />
      </fieldset>
    </form>
  );
};

export default ComposeSendForm;
