import React, { Component } from "react";
import Timekeeper from "react-timekeeper";

class Time extends Component {
  state = {
    time: "12:00 pm"
  };

  handleTimeClick = time => {
    this.setState({ time: time.formatted });
  };

  render() {
    const { handleTimePicker, displayTimePicker } = this.props;
    let containerClass = "time-picker-container hide";
    if (displayTimePicker) {
      containerClass = "time-picker-container";
    }
    return (
      <React.Fragment>
        <div className={containerClass}>
          <Timekeeper
            time={this.state.time}
            onClick={this.handleTimeClick}
            onDoneClick={handleTimePicker}
            config={{
              TIME_SELECTED_COLOR: "rgb(52, 179, 153)",
              CLOCK_WRAPPER_MERIDIEM_BACKGROUND_COLOR_SELECTED:
                "rgb(52, 179, 153)",
              CLOCK_WRAPPER_MERIDIEM_TEXT_COLOR_SELECTED: "white",
              CLOCK_HAND_ARM: "rgb(52, 179, 153)",
              CLOCK_HAND_CIRCLE_BACKGROUND: "rgb(52, 179, 153)"
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Time;
