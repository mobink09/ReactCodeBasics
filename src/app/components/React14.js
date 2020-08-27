import React from "react";
import "../css/React14.css";

class React14 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Loves make life Stronger</h1>
        <div>
          <img
            className="imgStyle"
            src="https://images.unsplash.com/photo-1578616070222-50c4de9d5ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="pic1"
          />
          <img
            className="imgStyle"
            src="https://images.unsplash.com/photo-1578635374554-b07c9b1619b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="pic2"
          />
          <img
            className="imgStyle"
            src="https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="pic3"
          />
        </div>
      </div>
    );
  }
}

export default React14;
