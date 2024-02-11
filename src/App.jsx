/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

const App = () => {
  // Data
  const usersData = [
    { id: 1, name: "Ruhul Amin", username: "ruhulcse" },
    { id: 2, name: "Sohel Rana", username: "sohelcu" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const initialFormState = { id: null, name: "", username: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="bg-slate-200 max-w-7xl mx-auto   py-20 px-6 content-center">
      <h1 className="text-sky-700 font-bold  text-4xl  text-center my-5">
        CRUD App with Hooks
      </h1>
      <div className=" flex  gap-10">
        <div className=" flex-1 flex flex-col p">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2 className="text-sky-600 text-2xl font-semibold">Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className=" flex-1">
          <h2 className="text-2xl font-semibold text-sky-600">View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
