import React, { Component } from "react";
import HeaderControlsThemePick from "./HeaderControlsThemePick";
import { ThemeContext } from "./theme-context";

class HeaderControlsTheme extends Component {
  state = {
    displayThemePicker: false,
    animateOut: ""
  };

  displayThemePicker = () => {
    if (this.state.displayThemePicker) {
      this.setState({ animateOut: " animate-out" });
      setTimeout(() => {
        this.setState(prevState => ({
          displayThemePicker: !prevState.displayThemePicker,
          animateOut: ""
        }));
      }, 400);
    } else {
      this.setState(prevState => ({
        displayThemePicker: !prevState.displayThemePicker
      }));
    }
  };

  render() {
    return (
      <div className="header-controls-item">
        <ThemeContext.Consumer>
          {({ theme }) => (
            <React.Fragment>
              <button
                className={`theme-btn ${theme}`}
                onClick={this.displayThemePicker}
                area-label="choose theme"
              />
              {this.state.displayThemePicker ? (
                <HeaderControlsThemePick
                  onClick={this.displayThemePicker}
                  animateOut={this.state.animateOut}
                />
              ) : null}
            </React.Fragment>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default HeaderControlsTheme;
