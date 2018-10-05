import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { Route } from "react-router-dom";

const Pages = ({ sideMenu }) => {
  let mainClass = "pages sidemenu-open";
  if (!sideMenu && window.matchMedia("(max-width: 800px)").matches) {
    mainClass = "pages";
  }
  return (
    <main className={mainClass}>
      <Route exact path="/" component={Dashboard} />
    </main>
  );
};

export default Pages;
