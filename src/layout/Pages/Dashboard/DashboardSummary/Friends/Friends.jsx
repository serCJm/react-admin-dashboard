import React, { Component } from "react";
import FriendsSearch from "./FriendsSearch";
import FriendsList from "./FriendsList";
import avatar1 from "../../../../../images/avatar1.jpg";
import avatar2 from "../../../../../images/avatar2.jpg";
import avatar6 from "../../../../../images/avatar6.jpg";
import avatar5 from "../../../../../images/avatar5.jpg";
import avatar4 from "../../../../../images/avatar4.jpg";
import avatar3 from "../../../../../images/avatar3.jpg";
import avatar7 from "../../../../../images/avatar7.jpg";

class Friends extends Component {
  state = {
    content: [
      { name: "Abraham Lincoln", image: avatar1, status: false },
      { name: "Agatha Christie", image: avatar2, status: false },
      { name: "Albert Einstein", image: avatar3, status: true },
      { name: "Cleopatra", image: avatar4, status: false },
      { name: "Benjamin Franklin", image: avatar5, status: false },
      { name: "Emily Dickinson", image: avatar6, status: true },
      { name: "Queen Elizabeth II", image: avatar7, status: false }
    ]
  };

  handleInvite = i => {
    const contentCopy = [...this.state.content];
    contentCopy[i].status = !contentCopy[i].status;
    this.setState({ content: contentCopy });
  };
  render() {
    return (
      <div className="friends">
        <FriendsSearch />
        <FriendsList
          content={this.state.content}
          handleClick={this.handleInvite}
        />
      </div>
    );
  }
}

export default Friends;
