import React, {useContext} from "react";
import axios from "axios";
import {TaskContext} from "../store/TaskProvider";

function deleteRequest(id) {
  return axios.delete(`http://localhost:8080/tasks/${id}`).then(response => response.data);
}

export const TodoItem = ({ task: { id, name, completed } }) => {
  const { deleteTask } = useContext(TaskContext);

  const handleDelBtnClick = () => {
    deleteTask(id);
    return deleteRequest(id)
  };

  return (
  <li>
    <input type="checkbox" id={id} checked={completed}/>
    <label htmlFor={id}>{name}</label>
    <button onClick={() => {
      return handleDelBtnClick();
    }}>delete</button>
  </li>
)};