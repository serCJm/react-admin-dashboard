import React, { Component } from "react";
import BasicPanel from "../components/BasicPanel/BasicPanel";
import HeaderFooter from "../components/HeaderFooter/HeaderFooter";
import PlainTabsHeader from "../components/PlainTabsHeader/PlainTabsHeader";

class BodyHeaderTabsFooter extends Component {
  state = {
    active: "home",
    tagTitle: null
  };

  handleSwitchActive = (id, e) => {
    this.setState({ active: id, tagTitle: null });
  };

  handleSwitchTitle = (title, e) => {
    this.setState({ tagTitle: title });
  };

  render() {
    let title;
    let text;
    if (this.state.active === "home") {
      title = "Home";
      text =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum.";
    } else if (this.state.active === "user") {
      title = "User";
      text =
        "Nam at lectus urna duis. Maecenas sed enim ut sem viverra aliquet eget sit. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt.";
    } else {
      title = "Cog";
      text =
        "Arcu vitae elementum curabitur vitae nunc. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Mollis aliquam ut porttitor leo.";
    }

    if (this.state.tagTitle) {
      title = this.state.tagTitle;
    }
    return (
      <React.Fragment>
        <HeaderFooter
          heading="Panel Header + Plain Tabs"
          styleClass="c--purple"
        />
        <PlainTabsHeader
          styleClass="c--purple"
          dropdown
          active={this.state.active}
          handleSwitchActive={this.handleSwitchActive}
          handleSwitchTitle={this.handleSwitchTitle}
        />
        <BasicPanel title={title} text={text} />
        <HeaderFooter
          heading="Panel Footer"
          miniHeading="Mini Heading"
          styleClass="c--purple"
        />
      </React.Fragment>
    );
  }
}

export default BodyHeaderTabsFooter;
