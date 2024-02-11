/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    //call bakend api here
    setUser(props.currentUser);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const updateUser = () => {
    console.log("updated users called");
    props.updateUser(user.id, user);
  };
  return (
    <form
      className="flex flex-col"
      onSubmit={(event) => {
        event.preventDefault();
        console.log("function called ", user.id, user);
        props.updateUser(user.id, user);
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
      <div className="flex gap-6 justify-center items-center">
        <button
          className="w-[120px] h-[40px] bg-green-600 text-xl font-normal px-1  text-white rounded-xl"
          onClick={() => updateUser()}
        >
          Update user
        </button>
        <button
          className="w-[120px] h-[40px] bg-red-600 text-xl font-medium  text-white rounded-xl"
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
