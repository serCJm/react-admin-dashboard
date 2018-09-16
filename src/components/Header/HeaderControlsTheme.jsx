import React, { Component } from "react";
import HeaderControlsThemePick from "./HeaderControlsThemePick";
import { ThemeContext } from "./theme-context";

class HeaderControlsTheme extends Component {
  state = {
    displayThemePicker: false
  };

  displayThemePicker = () => {
    this.setState(prevState => ({
      displayThemePicker: !prevState.displayThemePicker
    }));
  };
  render() {
    let themePicker = null;
    if (this.state.displayThemePicker) {
      themePicker = (
        <HeaderControlsThemePick onClick={this.displayThemePicker} />
      );
    }
    return (
      <div className="header-controls-item">
        <ThemeContext.Consumer>
          {theme => (
            <React.Fragment>
              <button
                className={`theme-btn ${theme}`}
                onClick={this.displayThemePicker}
              />
              {themePicker}
            </React.Fragment>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default HeaderControlsTheme;
