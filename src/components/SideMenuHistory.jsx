import React, { Component } from "react";
import SideMenuWrapper from "./SideMenuWrapper";
import SideMenuTimeLine from "./SideMenuTimeLine";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";

class SideMenuHistory extends Component {
  state = {
    entry1: {
      name: "Luk Cloudwaker",
      avatar: avatar1,
      messages: [
        {
          type: "action",
          date: "Sep 3, 2015"
        },
        {}
      ]
    },
    classNames: {
      avatar: "avatar"
    }
  };
  render() {
    return (
      <SideMenuWrapper
        id={this.props.id}
        current={this.props.current}
        render={() => (
          <div className="timeline">
            <SideMenuTimeLine
              data={this.state.entry1}
              classNames={this.state.classNames}
            />
          </div>
        )}
      />
    );
  }
}

export default SideMenuHistory;
