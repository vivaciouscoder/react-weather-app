import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "91t8a4380fe47251638a138b7fbod1f7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                onChange={updateCity}
                type="search"
                className="form-control w-100"
                placeholder="Enter a city..."
                autoFocus="on"
                autoComplete="istanbul"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-branding w-100"
                value="Search"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForcast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
