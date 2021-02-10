import React from "react";
import Chat from "./Chat";
import Login from "./Login";
import Users from "./Users";

const defaultUsers = [
  { id: 1, name: "Alex", avatar: "https://placeimg.com/140/140/any" },
  { id: 2, name: "Surya", avatar: "https://placeimg.com/140/140/any" },
  { id: 3, name: "Shiva", avatar: "https://placeimg.com/140/140/any" },
];

const { useState } = React;

export default function ChatApp() {
  const [currentPage, setCurrentPage] = useState("login");
  const [username, setUsername] = useState(null);
  const [users, setUsers] = useState(defaultUsers);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");
  const onLogin = () => {setCurrentPage('users')};
  const onClickUser = (user) => {
    setCurrentPage('chat')
    setSelectedUser(user)
  };
  const onUserAdd = () => {};
  const onBack = () => {setCurrentPage('users')};
  switch (currentPage) {
    case "login":
      return (
        <Login
          onLogin={onLogin}
          username={username}
          setUsername={setUsername}
          onLogin={onLogin}
        />
      );
    case "users":
      return (
        <Users
          users={users}
          onClickUser={onClickUser}
          userToAdd={userToAdd}
          setUserToAdd={setUserToAdd}
          onUserAdd={onUserAdd}
        />
      );
    case "chat":
      return <Chat onBack={onBack} selectedUser={selectedUser}/>;
    default:
      break;
  }
}
