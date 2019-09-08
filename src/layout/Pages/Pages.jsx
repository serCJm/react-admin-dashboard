import React, { Component, Suspense } from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Spinner from "../../components/UI/Spinner/Spinner";

const Posts = React.lazy(() => import("./Posts/Posts"));
const Inbox = React.lazy(() => import("./Mailbox/Inbox/Inbox"));
const Mail = React.lazy(() => import("./Mailbox/Mail/Mail"));
const Compose = React.lazy(() => import("./Mailbox/Compose/Compose"));
const Gallery = React.lazy(() => import("./Gallery/Gallery"));
const Social = React.lazy(() => import("./Social/Social"));
const SinglePost = React.lazy(() => import("./Posts/SinglePost"));
const Invoice = React.lazy(() => import("./Invoice/Invoice"));
const Pricing = React.lazy(() => import("./Pricing/Pricing"));
const Panels = React.lazy(() => import("./Panels/Panels"));
const LineSeries = React.lazy(() =>
  import("./Charts/D3/LineSeries/LineSeries")
);

const Pages = ({ sideMenu }) => {
  let mainClass = sideMenu ? "pages sidemenu-open" : "pages";
  return (
    <main className={mainClass}>
      <Route exact path="/" component={Dashboard} />
      <Suspense fallback={<Spinner></Spinner>}>
        <Route exact path="/inbox" render={() => <Inbox />} />
        <Route exact path="/mail" render={() => <Mail />} />
        <Route exact path="/compose" render={() => <Compose />} />
        <Route exact path="/gallery" render={() => <Gallery />} />
        <Route exact path="/social" render={() => <Social />} />
        <Route exact path="/posts" render={() => <Posts />} />
        <Route exact path="/singlePost" render={() => <SinglePost />} />
        <Route exact path="/invoice" render={() => <Invoice />} />
        <Route exact path="/pricing-tables" render={() => <Pricing />} />
        <Route exact path="/panels" render={() => <Panels />} />
        <Route exact path="/line-series" render={() => <LineSeries />} />
      </Suspense>
    </main>
  );
};

export default Pages;
