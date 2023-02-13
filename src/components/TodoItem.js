import React, {useContext, useRef, useState} from "react";
import {TaskContext} from "../store/TaskProvider";
import {EnterKeyCode} from "../const/EnterKeyCode";
import {deleteRequest, updateNameRequest, updateRequest} from "../httpRequest/UpdateRequest";

const defaultInputHidden = "hidden";
const showInput = "text";
const defaultLabelShow = false;
const hiddenLabel = true;
export const TodoItem = ({ task: { id, name, completed } }) => {
  const [taskName, setTaskName] = useState("");
  const [labelHidden, setLabelHidden] = useState(defaultLabelShow);
  const [inputHidden, setInputHidden] = useState(defaultInputHidden);
  const inputEl = useRef(null);
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

  const handleUpdateNameClick = async () => {
    await setLabelHidden(hiddenLabel);
    setInputHidden(showInput);
    inputEl.current.focus();
  };

  const updateTaskName = async (event) => {
    if (event.keyCode === EnterKeyCode) {
      updateNameRequest(id,taskName,completed)
      .then((data)=>{
          updateTask(data);
      });
      setLabelHidden(defaultLabelShow);
      setInputHidden(defaultInputHidden);
    }
  };

  const updateCancel = () => {
    setLabelHidden(defaultLabelShow);
    setInputHidden(defaultInputHidden);
    setTaskName("");
  };

  return (
  <li>
    <input type="checkbox" id={id} checked={completed} onChange={handleUpdateClick}/>
    <label hidden={labelHidden} onClick={handleUpdateNameClick}>{name}</label>
    <input value={taskName} ref={inputEl} type={inputHidden} onChange={(event) => {setTaskName(event.target.value)}} onKeyDown={updateTaskName} onBlur={updateCancel}/>
    <button onClick={handleDelBtnClick}>delete</button>
  </li>
)};