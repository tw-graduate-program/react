import React from "react";

export const TodoItem = ({ task: { id, name } }) => (
  <li>
    <input type="checkbox" id={id}/>
    <label htmlFor={id}>{name}</label>
  </li>
);