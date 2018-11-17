import React from "react";
import InboxMailItem from "./InboxMailItem";
import avatar1 from "../../../../../images/avatar1.jpg";
import avatar2 from "../../../../../images/avatar2.jpg";
import avatar4 from "../../../../../images/avatar4.jpg";
import avatar5 from "../../../../../images/avatar5.jpg";
import avatar6 from "../../../../../images/avatar6.jpg";
import avatar3 from "../../../../../images/avatar3.jpg";
import avatar7 from "../../../../../images/avatar7.jpg";
import avatar8 from "../../../../../images/avatar8.jpg";
import avatar9 from "../../../../../images/avatar9.jpg";
import avatar10 from "../../../../../images/avatar10.jpg";

const contents = [
  {
    avatar: avatar1,
    name: "Abraham Lincoln",
    count: 7,
    labelText: "some label",
    labelStyle: "label-style1",
    mailContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Aug 16"
  },
  {
    avatar: avatar2,
    name: "Agatha Christie",
    count: 3,
    labelText: "some label",
    labelStyle: "label-style2",
    mailContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Aug 12"
  },
  {
    avatar: avatar3,
    name: "Albert Einstein",
    count: 0,
    labelText: "some label",
    labelStyle: "label-style3",
    mailContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Aug 5"
  },
  {
    avatar: avatar4,
    name: "Cleopatra",
    count: 0,
    labelText: "some label",
    labelStyle: "label-style4",
    mailContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Jul 27"
  },
  {
    avatar: avatar5,
    name: "Emily Dickinson",
    count: 0,
    labelText: "some label",
    labelStyle: "label-style5",
    mailContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Jul 21"
  },
  {
    avatar: avatar6,
    name: "Queen Elizabeth II",
    count: 0,
    labelText: "some label",
    labelStyle: "label-style6",
    mailContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Jun 29"
  },
  {
    avatar: avatar7,
    name: "Benjamin Franklin",
    count: 0,
    labelText: "some label",
    labelStyle: "label-style7",
    mailContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Jun 25"
  },
  {
    avatar: avatar8,
    name: "Muhammad Ali",
    count: 0,
    labelText: "some label",
    labelStyle: "label-style8",
    mailContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Jun 22"
  },
  {
    avatar: avatar9,
    name: "Nikola Tesla",
    count: 0,
    labelText: "some label",
    labelStyle: "label-style9",
    mailContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Jun 15"
  },
  {
    avatar: avatar10,
    name: "Leonardo Da Vinci",
    count: 0,
    labelText: "some label",
    labelStyle: "label-style10",
    mailContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Jun 9"
  }
];

const InboxMail = () => {
  return <InboxMailItem contents={contents} />;
};

export default InboxMail;
