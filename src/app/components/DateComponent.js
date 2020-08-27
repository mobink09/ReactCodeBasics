import React from "react";

class DateComponent extends React.Component {
  render() {
    const date = new Date();
    const dateInString = date.toLocaleTimeString("en-US", {
      hour12: true,
    });

    const yearInString = date.toLocaleDateString();

    const name = "Mobin Arshad khan";

    return (
      <div>
        <h1 contentEditable={false}>Hello, i am {name}</h1>
        <p>Date in long format: {dateInString}</p>
        <p>Year in numeric is : {yearInString}</p>
        <img src="https://picsum.photos/200/300" alt="random image" />
      </div>
    );
  }
}

export default DateComponent;
