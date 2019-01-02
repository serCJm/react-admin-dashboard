import React, { Component, Suspense } from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Inbox from "./Mailbox/Inbox/Inbox";
import Mail from "./Mailbox/Mail/Mail";
import Compose from "./Mailbox/Compose/Compose";
import Gallery from "./Gallery/Gallery";
import Social from "./Social/Social";
//import Posts from "./Posts/Posts";
import SinglePost from "./Posts/SinglePost";
import Invoice from "./Invoice/Invoice";
import Pricing from "./Pricing/Pricing";
import Panels from "./Panels/Panels";
import LineSeries from "./Charts/D3/LineSeries/LineSeries";

const Posts = React.lazy(() => import("./Posts/Posts"));

class Pages extends Component {
  state = {
    mobile: window.matchMedia("(max-width: 800px)").matches
  };

  hangleScreenResize = () => {
    const mq = window.matchMedia("(max-width: 800px)").matches;
    this.setState({ mobile: mq });
  };

  componentDidMount() {
    window.addEventListener("resize", this.hangleScreenResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.hangleScreenResize);
  }

  render() {
    const { sideMenu } = this.props;
    let mainClass = "pages sidemenu-open";
    if (!sideMenu && window.matchMedia("(max-width: 800px)").matches) {
      mainClass = "pages";
    }
    return (
      <main className={mainClass}>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/inbox" component={Inbox} />
        <Route exact path="/mail" component={Mail} />
        <Route exact path="/compose" component={Compose} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/social" component={Social} />
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/posts" render={() => <Posts />} />
        </Suspense>
        <Route exact path="/singlePost" component={SinglePost} />
        <Route exact path="/invoice" component={Invoice} />
        <Route exact path="/pricing-tables" component={Pricing} />
        <Route exact path="/panels" component={Panels} />
        <Route exact path="/line-series" component={LineSeries} />
      </main>
    );
  }
}

export default Pages;
