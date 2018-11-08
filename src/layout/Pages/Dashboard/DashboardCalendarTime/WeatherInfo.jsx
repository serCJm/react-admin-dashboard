import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

const WeatherInfo = () => {
  return (
    <div className="weather">
      <p className="weather-icon">
        <FontAwesomeIcon icon={faCloudRain} />
      </p>
      <div className="weather-temp">
        <p>Max: 25&#xb0;</p>
        <p>Min: 21&#xb0;</p>
      </div>
      <p className="weather-status">Showers</p>
      <p className="weather-stats">Wind: 19 km/h | Humidity: 87%</p>
    </div>
  );
};

export default WeatherInfo;
