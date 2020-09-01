import React from "react";
import "../css/formGreeting.css";

class FromGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      submit: "",
    };
    this.grabText = this.grabText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  grabText = (event) => {
    this.setState({
      user: event.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      submit: this.state.user,
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Please Enter Your Name</h2>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={this.grabText}
          value={this.state.user}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <div className="card">
          <p>Hello Mrs. {this.state.submit} Good Luck For your Future</p>
        </div>
      </div>
    );
  }
}

export default FromGreeting;
