import React, { Component } from "react";
import SideMenuHomeList from "./SideMenuHomeList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";

class SideMenuHomeComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          id: "panels",
          icon: <FontAwesomeIcon icon={faColumns} />,
          text: "Panels",
          submenu: null
        },
        {
          id: "chars",
          icon: <FontAwesomeIcon icon={faChartPie} />,
          text: "Charts",
          countstyle: { color: "#fff", background: "rgb(214, 127, 107)" },
          submenu: [
            {
              id: "rubix",
              icon: <FontAwesomeIcon icon={faChartLine} />,
              text: "Rubix Charts",
              submenu: [
                {
                  id: "line-series",
                  icon: null,
                  text: "Line Series"
                },
                {
                  id: "area-series",
                  icon: null,
                  text: "Area Series"
                },
                {
                  id: "bar-column-series",
                  icon: null,
                  text: "Bar+Column Series"
                },
                {
                  id: "mixed",
                  icon: null,
                  text: "Mixed Series"
                },
                {
                  id: "pie-donut-series",
                  icon: null,
                  text: "Pie+Donut Series"
                }
              ]
            },
            {
              id: "chart-js",
              icon: <FontAwesomeIcon icon={faChartBar} />,
              text: "Chart.JS"
            },
            {
              id: "c3-js",
              icon: <FontAwesomeIcon icon={faChartArea} />,
              text: "C3.JS"
            },
            {
              id: "morris-js",
              icon: <FontAwesomeIcon icon={faSignal} />,
              text: "Morris.JS"
            }
          ]
        },
        {
          id: "gallery",
          icon: <FontAwesomeIcon icon={null} />,
          text: "Gallery",
          submenu: null
        },
        {
          id: "social",
          icon: <FontAwesomeIcon icon={null} />,
          text: "Social",
          submenu: null
        },
        {
          id: "blog",
          icon: <FontAwesomeIcon icon={null} />,
          text: "Blog",
          countstyle: { color: "#fff", background: "rgb(46, 179, 152)" },
          submenu: [
            {
              id: "posts",
              icon: <FontAwesomeIcon icon={null} />,
              text: "Posts"
            },
            {
              id: "singlePost",
              icon: <FontAwesomeIcon icon={null} />,
              text: "Single Post"
            }
          ]
        }
      ],
      classNames: {
        title: "title",
        menuItem: "menu-item",
        text: "text",
        subParent: "submenu-parent",
        subMenu: "sub-menu",
        subMenuCount: "submenu-count",
        menuIcon: "menu-icon",
        hover: "hover",
        active: "active"
      }
    };
  }

  render() {
    return (
      <div>
        <h2 className={this.state.classNames.title}>
          {Object.keys(this.state)[0]}
        </h2>
        <SideMenuHomeList
          listItems={this.state.components}
          classNames={this.state.classNames}
          handleActivePage={this.props.handleActivePage}
          currentMenu={this.props.currentMenu}
        />
      </div>
    );
  }
}
export default SideMenuHomeComponents;
