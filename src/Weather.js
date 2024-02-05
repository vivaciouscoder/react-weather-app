import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control d-inline"
              placeholder="Enter a city..."
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            ></input>
          </div>
        </div>
      </form>
      <h1>Berlin</h1>
      <ul className="generalInformation">
        <li>Monday 19:40</li>
        <li>Cloudy</li>
      </ul>

      <div className="row text-start detailedInformation">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            className="d-inline"
            alt="weather icon"
          ></img>{" "}
          <h2 className="d-inline">10°C</h2>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 71%</li>
            <li>Wind: 29 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
