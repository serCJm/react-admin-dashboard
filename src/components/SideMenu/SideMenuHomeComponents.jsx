import React, { Component } from "react";
import SideMenuHomeList from "./SideMenuHomeList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faMagic } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faFont } from "@fortawesome/free-solid-svg-icons";

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
          id: "charts",
          icon: <FontAwesomeIcon icon={faChartPie} />,
          text: "Charts",
          countstyle: { color: "#fff", background: "rgb(214, 127, 107)" },
          submenu: [
            {
              id: "d3",
              icon: <FontAwesomeIcon icon={faChartLine} />,
              text: "d3",
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
          id: "static-timeline",
          icon: <FontAwesomeIcon icon={faClock} />,
          text: "Static Timeline",
          submenu: null
        },
        {
          id: "interactive-timeline",
          icon: <FontAwesomeIcon icon={faStopwatch} />,
          text: "Interactive Timeline",
          submenu: null
        },
        {
          id: "codemirror",
          icon: <FontAwesomeIcon icon={faCode} />,
          text: "Codemirror",
          submenu: null
        },
        {
          id: "maps",
          icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
          text: "Maps",
          submenu: null
        },
        {
          id: "editor",
          icon: <FontAwesomeIcon icon={faPenSquare} />,
          text: "Editor",
          submenu: null
        },
        {
          id: "ui-elements",
          icon: <FontAwesomeIcon icon={faCompass} />,
          text: "UI Elements",
          countstyle: { color: "#fff", background: "rgb(215, 31, 75)" },
          submenu: [
            {
              id: "buttons",
              icon: <FontAwesomeIcon icon={faPlayCircle} />,
              text: "Buttons"
            },
            {
              id: "dropdowns",
              icon: <FontAwesomeIcon icon={faChevronCircleDown} />,
              text: "Dropdowns"
            },
            {
              id: "tabs-navs",
              icon: <FontAwesomeIcon icon={faTable} />,
              text: "Tabs & Navs"
            },
            {
              id: "sliders",
              icon: <FontAwesomeIcon icon={faSlidersH} />,
              text: "Sliders"
            },
            {
              id: "knobs",
              icon: <FontAwesomeIcon icon={faAdjust} />,
              text: "Knobs"
            },
            {
              id: "modals",
              icon: <FontAwesomeIcon icon={faBars} />,
              text: "Modals"
            },
            {
              id: "messanger",
              icon: <FontAwesomeIcon icon={faComment} />,
              text: "Messanger"
            }
          ]
        },
        {
          id: "forms",
          icon: <FontAwesomeIcon icon={faHandPointRight} />,
          text: "Forms",
          countstyle: { color: "#fff", background: "rgb(217, 83, 79)" },
          submenu: [
            {
              id: "controls",
              icon: <FontAwesomeIcon icon={faGamepad} />,
              text: "Controls"
            },
            {
              id: "x-editable",
              icon: <FontAwesomeIcon icon={faEdit} />,
              text: "X-Editable"
            },
            {
              id: "wizard",
              icon: <FontAwesomeIcon icon={faMagic} />,
              text: "Wizard"
            }
          ]
        },
        {
          id: "tables",
          icon: <FontAwesomeIcon icon={faTable} />,
          text: "Tables",
          countstyle: { color: "#fff", background: "rgb(121, 176, 236)" },
          submenu: [
            {
              id: "bootstrap",
              icon: <FontAwesomeIcon icon={faTv} />,
              text: "Bootstrap Tables"
            },
            {
              id: "datatables",
              icon: <FontAwesomeIcon icon={faCompactDisc} />,
              text: "Datatables"
            },
            {
              id: "tablesaw",
              icon: <FontAwesomeIcon icon={faSun} />,
              text: "Tablesaw"
            }
          ]
        },
        {
          id: "grid",
          icon: <FontAwesomeIcon icon={faThLarge} />,
          text: "Grid",
          submenu: null
        },
        {
          id: "calendar",
          icon: <FontAwesomeIcon icon={faCalendarAlt} />,
          text: "Calendar",
          submenu: null
        },
        {
          id: "file-utilities",
          icon: <FontAwesomeIcon icon={faFile} />,
          text: "File Utilities",
          countstyle: { color: "#fff", background: "rgb(255, 196, 151)" },
          submenu: [
            {
              id: "dropzone",
              icon: <FontAwesomeIcon icon={faDownload} />,
              text: "Dropzone"
            },
            {
              id: "image-cropping",
              icon: <FontAwesomeIcon icon={faImages} />,
              text: "Image Cropping"
            }
          ]
        },
        {
          id: "fonts",
          icon: <FontAwesomeIcon icon={faFont} />,
          text: "Fonts",
          submenu: null
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

    this.baseState = this.state.components.map(a => Object.assign({}, a));
    this.filterMenu = this.filterMenu.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      this.filterMenu();
    }
  }

  filterMenu() {
    const searchTerm = this.props.search;
    // deep clone an array
    // otherwise, slice and spread operator shallow clone

    const pages = this.baseState.map(item => Object.assign({}, item));
    // unfortunately, have to hard-code the assignment
    // because even Object.assign goes only 2 levels deep
    // 3rd level is passed by reference only
    // resulting in modified baseState property upon filter
    pages[1].submenu[0].submenu = [
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
    ];
    const filtered = pages.filter(function f(item) {
      if (item.submenu) {
        item.submenu = item.submenu.filter(f);
        if (item.submenu.length > 0) {
          return true;
        }
      }
      if (item.text.toLowerCase().search(searchTerm.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({ components: filtered });
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
