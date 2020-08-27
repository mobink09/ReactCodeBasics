import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Skills = this.props.skill.map((name) => <li>{name}</li>);
    const hobbies = this.props.hobbies.map((hob) => <li>{hob}</li>);

    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>
          I am {this.props.name} I like to write code to be a good developers{" "}
        </p>
        <h2>Skills are:</h2>
        <ul>{Skills}</ul>
        <h2>Hobbies:</h2>
        <ul>{hobbies}</ul>
      </div>
    );
  }
}

export default About;
