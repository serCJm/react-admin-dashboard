import React, { Component } from "react";
import SideMenuWrapper from "./SideMenuWrapper";
import SideMenuTimeLine from "./SideMenuTimeLine";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
// import avatar3 from "../images/avatar3.jpg";
import mapLocation from "../images/map-location.png";

class SideMenuHistory extends Component {
  state = {
    entry1: {
      name: "Luk Cloudwaker",
      avatar: avatar1,
      style: "style1",
      messages: [
        {
          type: "action",
          date: "Sep 3, 2015",
          text: "Sent you a friend request!",
          btnAccept: "Accept",
          btnReject: "Reject"
        }
      ]
    },
    entry2: {
      name: "Ted Bearmaker",
      avatar: avatar2,
      style: "style2",
      messages: [
        {
          type: "location",
          date: "Aug 25, 2015",
          place: "Science World",
          location: "555 W Georgia St, Narnia, WL, 432677",
          extraContent: (
            <img
              src={mapLocation}
              width="175px"
              height="100px"
              alt="map location"
            />
          )
        }
      ]
    },
    classNames: {}
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
            <SideMenuTimeLine
              data={this.state.entry2}
              classNames={this.state.classNames}
            />
          </div>
        )}
      />
    );
  }
}

export default SideMenuHistory;
