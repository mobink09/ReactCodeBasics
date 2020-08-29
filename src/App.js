import React from "react";
import GreetingTime from "./app/components/GreetingTime";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <React.Fragment>
        <GreetingTime />
      </React.Fragment>
    );
  }
}
export default App;
