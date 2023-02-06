import {TodoItem} from "./TodoItem";
import React from "react";

export function TodoList(props) {
  return (
    <ul className="todo-list">
    {props.tasks.filter((task) => !task.completed).map((task) => (<TodoItem key={task.key} task={task}/>))}
    </ul>
  );
}