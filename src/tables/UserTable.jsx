/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const UserTable = (props) => (
  <table>
    <thead className="text-2xl font-bold ">
      <tr>
        <th>Name</th>
        <th className="pl-20">Username</th>
        <th className="pl-20"> Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td className="pl-20">{user.username}</td>
            <td className="pl-20 flex justify-between gap-3">
              <button
                className="w-[100px] h-[40px] bg-orange-400 text-xl font-medium  text-white rounded-xl"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="w-[100px] h-[40px] bg-red-600 text-xl font-medium  text-white rounded-xl"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
