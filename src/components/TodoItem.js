import React from "react";
import axios from "axios";

function deleteTask(id) {
  return axios.delete(`http://localhost:8080/tasks/${id}`).then(response => response.data);
}

export const TodoItem = ({ task: { id, name, completed } }) => (
  <li>
    <input type="checkbox" id={id} checked={completed}/>
    <label htmlFor={id}>{name}</label>
    <button onClick={() => deleteTask(id)}></button>
  </li>
);