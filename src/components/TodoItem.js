import React from "react";

export const TodoItem = ({ task: { id, name, completed } }) => (
  <li>
    <input type="checkbox" id={id} checked={completed}/>
    <label htmlFor={id}>{name}</label>
  </li>
);