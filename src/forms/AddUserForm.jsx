/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      className="flex flex-col"
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label className="text-2xl font-bold ">Name</label>
      <input
        className="text-xl font-medium px-3 py-2 rounded-xl mb-6"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label className="text-2xl font-bold ">Username</label>
      <input
        className="text-xl font-medium px-3 py-2 rounded-xl mb-6"
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className="text-xl font-medium px-3 py-2  bg-blue-500 hover:bg-blue-700 mb-6 rounded-xl text-white">
        Add new user
      </button>
    </form>
  );
};

export default AddUserForm;
