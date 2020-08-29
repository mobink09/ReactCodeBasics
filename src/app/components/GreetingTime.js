import React from "react";

import "../css/GreetingTime.css";

const GreetingTime = () => {
  const date = new Date();
  const hours = date.getHours();
  let greeting = "";

  const cssStyle = {};

  if (hours < 12 && hours >= 0) {
    greeting = "Good Morning";
    cssStyle.color = "red";
  } else if (hours < 18 && hours >= 12) {
    greeting = "Good Afternoon";
    cssStyle.color = "yellow";
  } else {
    greeting = "Good Night";
    cssStyle.color = "orange";
  }

  return (
    <div className="center">
      <h1 className="h1">
        Hello sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  );
};

export default GreetingTime;
