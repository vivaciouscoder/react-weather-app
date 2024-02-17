import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>

      <div className="row mt-4">
        <div className="col-6">
          <ul className="d-flex justify-content-start">
            <li>
              <WeatherIcon code={props.data.icon} />
            </li>
            <li>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit ms-2">°C</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
