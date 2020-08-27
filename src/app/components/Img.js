import React from "react";

import img from "./ListImage";

class Img extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {img.map((im, index) => {
          return (
            <img
              src={im.download_url}
              alt="download"
              key={index + 1}
              style={{
                width: 200,
                height: 200,
                margin: 5,
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default Img;
