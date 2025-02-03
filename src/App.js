import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersLIst from "./components/Users/UsersLIst";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersLIst users={users} />
    </div>
  );
}

export default App;
