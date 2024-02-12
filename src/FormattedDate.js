import React from "react";

export default function formattedDate(props) {
  const hour = props.date.getHours();
  if (hour < 10) {
    // eslint-disable-next-line
    hour = `0${hour}`;
  }
  const minute = props.date.getMinutes();
  if (minute < 10) {
    // eslint-disable-next-line
    minute = `0${minute}`;
  }
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[props.date.getDay()];

  return (
    <div>
      {day} {hour}:{minute}
    </div>
  );
}
