import React, { Component } from "react";
import SideMenuUsersStatus from "./SideMenuUsersStatus";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";
import avatar5 from "../images/avatar5.jpg";
import avatar6 from "../images/avatar6.jpg";
import avatar7 from "../images/avatar7.jpg";
import avatar8 from "../images/avatar8.jpg";
import avatar9 from "../images/avatar9.jpg";
import avatar10 from "../images/avatar10.jpg";
import avatar11 from "../images/avatar11.jpg";
import avatar12 from "../images/avatar12.png";
import avatar13 from "../images/avatar13.jpg";
import avatar14 from "../images/avatar14.jpg";

class SideMenuUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: [
        { name: "Abraham Lincoln", image: avatar1 },
        { name: "Agatha Christie", image: avatar2 },
        { name: "Albert Einstein", image: avatar3 },
        { name: "Cleopatra", image: avatar4 }
      ],
      idle: [
        { name: "Benjamin Franklin", image: avatar5 },
        { name: "Emily Dickinson", image: avatar6 },
        { name: "Queen Elizabeth II", image: avatar7 }
      ],
      busy: [
        { name: "Muhammad Ali", image: avatar8 },
        { name: "Nikola Tesla", image: avatar9 },
        { name: "Leonardo Da Vinci", image: avatar10 },
        { name: "Oprah Winfrey", image: avatar11 }
      ],
      offline: [
        { name: "Rachel Carson", image: avatar12 },
        { name: "Jacques Cousteau", image: avatar13 },
        { name: "Thomas Edison", image: avatar14 }
      ],
      classNames: {
        title: "title",
        user: "user",
        avatar: "avatar",
        name: "name",
        hover: "hover",
        active: "active"
      },
      selectedUser: null
    };
    this.handleSelectUser = this.handleSelectUser.bind(this);
  }

  handleSelectUser(userID) {
    this.setState({ selectedUser: userID });
  }
  render() {
    return (
      <div className="home users">
        <SideMenuUsersStatus
          classNames={this.state.classNames}
          status="online"
          users={this.state.online}
          avatarStyle={{
            width: 35,
            height: 35,
            border: "2px solid rgb(85, 201, 166)"
          }}
          selectedUser={this.state.selectedUser}
          handleSelectUser={this.handleSelectUser}
        />
        <SideMenuUsersStatus
          classNames={this.state.classNames}
          status="idle"
          users={this.state.idle}
          avatarStyle={{
            width: 35,
            height: 35,
            border: "2px solid rgb(250, 221, 127)"
          }}
          selectedUser={this.state.selectedUser}
          handleSelectUser={this.handleSelectUser}
        />
        <SideMenuUsersStatus
          classNames={this.state.classNames}
          status="busy"
          users={this.state.busy}
          avatarStyle={{
            width: 35,
            height: 35,
            border: "2px solid rgb(222, 115, 125)"
          }}
          selectedUser={this.state.selectedUser}
          handleSelectUser={this.handleSelectUser}
        />
        <SideMenuUsersStatus
          classNames={this.state.classNames}
          status="offline"
          users={this.state.offline}
          avatarStyle={{
            width: 35,
            height: 35,
            border: "2px solid rgb(81, 87, 88)"
          }}
          selectedUser={this.state.selectedUser}
          handleSelectUser={this.handleSelectUser}
        />
      </div>
    );
  }
}

export default SideMenuUsers;
