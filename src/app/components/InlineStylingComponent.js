import React from "react";

class InlineStylingComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Mobin Arshad Khan", online: true },
        { name: "Mohit Kumar", online: true },
        { name: "Shen", online: false },
        { name: "Robert", online: true },
        { name: "Jhon Doe", online: false },
        { name: "George", online: false },
        { name: "Ashif", online: true },
        { name: "Arif", online: true },
        { name: "Raju", online: true },
        { name: "Kamruddin", online: false },
        { name: "Aftab", online: true },
      ],
    };
  }

  render() {
    // filter the users which are online
    const onlineUsers = this.state.users.filter((user) => user.online);
    const onlineUserList = onlineUsers.map((usr, index) => {
      return (
        <li
          key={index}
          style={{
            listStyleType: "none",
            backgroundColor: "purple",
            marginTop: 20,
            color: "white",
            padding: 20,
          }}
        >
          {usr.name}
        </li>
      );
    });

    // only using inline style :- inline style is very famous in react community
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <div
          style={{ backgroundColor: "lime", width: "50%", paddingRight: 50 }}
        >
          <h1
            style={{
              color: "magenta",
              textShadow: "0 4px 5px rgba(0, 0, 0, 0.4)",
              fontFamily: "cursive",
            }}
          >
            List Of Online Users
          </h1>
          <ul>{onlineUserList}</ul>
        </div>
      </div>
    );
  }
}

export default InlineStylingComponents;
