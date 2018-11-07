import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const TimeToggle = ({ handleTimePicker, displayTimePicker }) => {
  let icon = faClock;
  if (displayTimePicker) {
    icon = faCalendarAlt;
  }
  return (
    <div className="time-icon-container">
      <p className="time-icon" onClick={handleTimePicker}>
        <FontAwesomeIcon icon={icon} />
      </p>
    </div>
  );
};

export default TimeToggle;
