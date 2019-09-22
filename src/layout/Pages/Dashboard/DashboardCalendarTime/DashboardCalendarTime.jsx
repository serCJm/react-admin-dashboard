import React, { useState } from "react";
import Calendar from "react-calendar";
import Time from "./Time";
import TimeToggle from "./TimeToggle";
import WeatherInfo from "./WeatherInfo";

const DashboardCalendarTime = () => {
  const [date, setDate] = useState(new Date());
  const [displayTimePicker, setDisplayTimePicker] = useState(false);

  const handleTimePicker = () => {
    setDisplayTimePicker(prevState => !prevState);
  };

  const onChange = date => setDate(date);

  return (
    <div className="calendar-time">
      <div
        style={
          displayTimePicker
            ? {
                maxHeight: "0",
                overflowY: "hidden",
                transition: "max-height 0.3s linear"
              }
            : {
                maxHeight: "30rem",
                transition: "max-height 0.3s linear"
              }
        }
      >
        <Calendar className="calendar" onChange={onChange} value={date} />
      </div>
      <TimeToggle
        handleTimePicker={handleTimePicker}
        displayTimePicker={displayTimePicker}
      />
      <Time
        handleTimePicker={handleTimePicker}
        displayTimePicker={displayTimePicker}
      />
      <WeatherInfo />
    </div>
  );
};

export default DashboardCalendarTime;

// class DashboardCalendarTime extends Component {
//   state = {
//     date: new Date(),
//     displayTimePicker: false
//   };

//   handleTimePicker = () => {
//     this.setState(prevState => ({
//       displayTimePicker: !prevState.displayTimePicker
//     }));
//   };

//   onChange = date => this.setState({ date });
//   render() {
//     return (
//       <div className="calendar-time">
//         <div
//           style={
//             this.state.displayTimePicker
//               ? {
//                   maxHeight: "0",
//                   overflowY: "hidden",
//                   transition: "max-height 0.3s linear"
//                 }
//               : {
//                   maxHeight: "30rem",
//                   transition: "max-height 0.3s linear"
//                 }
//           }
//         >
//           <Calendar
//             className="calendar"
//             onChange={this.onChange}
//             value={this.state.date}
//           />
//         </div>
//         <TimeToggle
//           handleTimePicker={this.handleTimePicker}
//           displayTimePicker={this.state.displayTimePicker}
//         />
//         <Time
//           handleTimePicker={this.handleTimePicker}
//           displayTimePicker={this.state.displayTimePicker}
//         />
//         <WeatherInfo />
//       </div>
//     );
//   }
// }

// export default DashboardCalendarTime;
