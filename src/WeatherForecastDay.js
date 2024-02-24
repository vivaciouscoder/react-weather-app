import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);

    return temperature;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);

    return temperature;
  }

  return (
    <div>
      <div className="weatherForcast-day">{day()}</div>
      <div className="weatherForcast-icon">
        <WeatherIcon code={props.data.condition.icon} size={32} />

        <div className="weatherForcast-temp">
          <span>
            <span className="max-temp">{maxTemp()}°</span>
            <span className="min-temp">{minTemp()}°</span>
          </span>
        </div>
      </div>
    </div>
  );
}
