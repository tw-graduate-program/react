import React, {useContext} from "react";
import axios from "axios";
import {TaskContext} from "../store/TaskProvider";

function deleteRequest(id) {
  return axios.delete(`http://localhost:8080/tasks/${id}`).then(response => response.data);
}

function updateRequest({ id, name, status }) {
  return axios.put(`http://localhost:8080/tasks/${id}`,{
    "id": id,
    "name": name,
    "completed": status
  }).then(response => response.data);
}

export const TodoItem = ({ task: { id, name, completed } }) => {
  const { deleteTask, updateTask } = useContext(TaskContext);

  const handleDelBtnClick = () => {
    deleteTask(id);   // state
    return deleteRequest(id); // HTTP DELETE Method
  };

  const handleUpdateClick = () => {
    const status = !completed;
    updateTask({ id, name, status }); // state hook
    return updateRequest({ id, name, status });  // http
  };

  return (
  <li>
    <input type="checkbox" id={id} checked={completed} onChange={() => {
      return handleUpdateClick();
    }}/>
    <label>{name}</label>
    <button onClick={() => {
      return handleDelBtnClick();
    }}>delete</button>
  </li>
)};