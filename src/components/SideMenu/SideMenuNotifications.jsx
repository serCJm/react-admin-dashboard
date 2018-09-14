import React, { Component } from "react";
import SideMenuWrapper from "./SideMenuWrapper";
import SideMenuTimeLine from "./SideMenuTimeLine";
import SimpleBarChart from "../graphs/SimpleBarChart";
import SimplePieChart from "../graphs/SimplePieChart";
import redExclamation from "../../images/red-exclamation-triangle.png";
import yellowExclamation from "../../images/yellow-exclamation-triangle.png";

const dataNetworkTraffic = [];
for (let i = 0; i < 41; i++) {
  const newNumber = Math.round(Math.random() * 14);
  dataNetworkTraffic.push(newNumber);
}

const dataCPU = [];
for (let i = 0; i < 25; i++) {
  const newNumber = Math.round(Math.random() * 100);
  dataCPU.push(newNumber);
}

const node1 = [];
for (let i = 0; i < 2; i++) {
  const newNumber = Math.random();
  node1.push(newNumber);
}
const node2 = [];
for (let i = 0; i < 2; i++) {
  const newNumber = Math.random();
  node2.push(newNumber);
}
const node5 = [];
for (let i = 0; i < 4; i++) {
  const newNumber = Math.random();
  node5.push(newNumber);
}
const node7 = [];
for (let i = 0; i < 6; i++) {
  const newNumber = Math.random();
  node7.push(newNumber);
}

class SideMenuNotifications extends Component {
  state = {
    entry1: {
      name: "SYSTEM-WIDE ALERTS",
      avatar: redExclamation,
      style: "alert-system",
      messages: [
        {
          type: "message",
          date: "Jul 19, 2015",
          text: "Spike in network traffic detected.",
          extraContent: (
            <SimpleBarChart
              data={dataNetworkTraffic}
              width="180"
              height="40"
              margin={{ top: 10, right: 0 }}
              classNames={{ bar1: null, bar2: "network-traffic" }}
            />
          )
        },
        {
          type: "action",
          date: "May 3, 2015",
          text: "Node 1 down for 30 minutes! Take action!!",
          btnAccept: "Restore",
          btnReject: "Destory"
        }
      ]
    },
    entry2: {
      name: "NODE ALERTS",
      avatar: yellowExclamation,
      style: "alert-node",
      messages: [
        {
          type: "message",
          date: "Jul 19, 2015",
          text: "CPU running at 100% on Node 1.",
          extraContent: (
            <SimpleBarChart
              data={dataCPU}
              width="180"
              height="60"
              margin={{ top: 10, right: 0 }}
              classNames={{ bar1: null, bar2: "cpu" }}
            />
          )
        },
        {
          type: "node",
          date: "May 5, 2015",
          text: "Running out of disk space on",
          nodes: ["Node 1", "Node 2", "Node 5", "Node 7"],
          extraContent: (
            <div className="nodes">
              <SimplePieChart data={node1} width="40" height="40" />
              <SimplePieChart data={node2} width="40" height="40" />
              <SimplePieChart data={node5} width="40" height="40" />
              <SimplePieChart data={node7} width="40" height="40" />
            </div>
          )
        }
      ]
    }
  };
  render() {
    return (
      <SideMenuWrapper id={this.props.id} current={this.props.current}>
        <div className="timeline">
          {Object.keys(this.state).map((entry, i) => (
            <SideMenuTimeLine key={i} data={this.state[entry]} />
          ))}
        </div>
      </SideMenuWrapper>
    );
  }
}

export default SideMenuNotifications;
