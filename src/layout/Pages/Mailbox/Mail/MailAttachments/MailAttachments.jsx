import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

const MailAttachments = () => {
  return (
    <div className="mail-attachments">
      <h3>Attachments (3 files, 680 KB)</h3>
      <div className="mail-attachments-item">
        <p>
          <FontAwesomeIcon icon={faFileImage} /> the-force.gif (128 KB)
        </p>
        <button className="mail-attachments-link">Download</button>
      </div>
      <div className="mail-attachments-item">
        <p>
          <FontAwesomeIcon icon={faFileImage} /> jedi-weapon.png (450 KB)
        </p>
        <button className="mail-attachments-link">Download</button>
      </div>
      <div className="mail-attachments-item">
        <p>
          <FontAwesomeIcon icon={faHtml5} /> page.html (5 KB)
        </p>
        <button className="mail-attachments-link">Download</button>
      </div>
    </div>
  );
};

export default MailAttachments;
