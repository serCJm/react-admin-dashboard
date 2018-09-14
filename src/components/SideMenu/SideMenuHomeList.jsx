import React from "react";
import SideMenuHomeItem from "./SideMenuHomeItem";

function SideMenuHomeList(props) {
  const listItems = props.listItems.map(item => {
    let submenu = null;
    if (item.submenu) {
      submenu = item.submenu.map(item => {
        let subSubmenu = null;
        if (item.submenu) {
          subSubmenu = item.submenu.map(item => (
            <SideMenuHomeItem
              id={item.id}
              key={item.id}
              icon={item.icon}
              text={item.text}
              countstyle={item.countstyle}
              classNames={props.classNames}
              handleActivePage={props.handleActivePage}
              currentMenu={props.currentMenu}
            />
          ));
        }
        return (
          <SideMenuHomeItem
            id={item.id}
            key={item.id}
            icon={item.icon}
            text={item.text}
            submenu={subSubmenu}
            countstyle={item.countstyle}
            classNames={props.classNames}
            handleActivePage={props.handleActivePage}
            currentMenu={props.currentMenu}
          />
        );
      });
    }

    return (
      <SideMenuHomeItem
        id={item.id}
        key={item.id}
        icon={item.icon}
        text={item.text}
        submenu={submenu}
        countstyle={item.countstyle}
        classNames={props.classNames}
        handleActivePage={props.handleActivePage}
        currentMenu={props.currentMenu}
      />
    );
  });

  return <ul>{listItems}</ul>;
}
export default SideMenuHomeList;
