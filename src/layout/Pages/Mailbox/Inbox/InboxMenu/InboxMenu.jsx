import React from "react";
import InboxMenuItems from "./InboxMenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const mailboxesContents = [
  {
    icon: <FontAwesomeIcon icon={faInbox} />,
    title: "Inbox",
    count: 65,
    active: true
  },
  {
    icon: <FontAwesomeIcon icon={faStar} />,
    title: "Starred",
    count: 0,
    active: false
  },
  {
    icon: <FontAwesomeIcon icon={faShareSquare} />,
    title: "Sent",
    count: 0,
    active: false
  },
  {
    icon: <FontAwesomeIcon icon={faDraftingCompass} />,
    title: "Drafts",
    count: 0,
    active: false
  },
  {
    icon: <FontAwesomeIcon icon={faPaperclip} />,
    title: "Attachments",
    count: 0,
    active: false
  }
];

const othersContents = [
  {
    icon: <FontAwesomeIcon icon={faExclamation} />,
    title: "Spam",
    count: 15,
    active: false
  },
  {
    icon: <FontAwesomeIcon icon={faTrashAlt} />,
    title: "Trash",
    count: 0,
    active: false
  }
];

const InboxMenu = () => {
  return (
    <div className="sidemenu">
      <h2 className="sidemenu-title">mailboxes</h2>
      <InboxMenuItems contents={mailboxesContents} />
      <hr className="sidemenu-hr" />
      <h2 className="sidemenu-title">others</h2>
      <InboxMenuItems contents={othersContents} />
      <hr className="sidemenu-hr" />
      <h2 className="sidemenu-title">tags</h2>
      <InboxMenuTagItems />
    </div>
  );
};

export default InboxMenu;
