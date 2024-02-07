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
              className="form-control w-100"
              placeholder="Enter a city..."
              autoFocus="on"
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
      <ul>
        <li>Monday 19:40</li>
        <li>Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              className="float-left img-icon "
              alt="weather icon"
            ></img>{" "}
          </div>

          <div className="float-left">
            <span className="temperature">10</span>
            <span className="unit">°C</span>
          </div>
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
