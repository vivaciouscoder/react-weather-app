import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  let celsiusTemp = Math.round(props.unit);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{celsiusTemp}</span>
        <span className="unit ">
          <a href="/" className="text-black">
            °C{" "}
          </a>
          |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemp = Math.round((celsiusTemp * 9) / 5 + 32);
    return (
      <div>
        <span className="temperature">{fahrenheitTemp}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          |
          <a href="/" className="text-black">
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  }
}
