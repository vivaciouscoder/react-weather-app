import React from "react";

export default function formattedDate(props) {
  let hour = props.date.getHours();
  if (hour < 10) {
    // eslint-disable-next-line
    hour = `0${hour}`;
  }
  let minute = props.date.getMinutes();
  if (minute < 10) {
    // eslint-disable-next-line
    minute = `0${minute}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  return (
    <div>
      {day} {hour}:{minute}
    </div>
  );
}
