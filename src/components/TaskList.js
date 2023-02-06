import {TodoItem} from "./TodoItem";
import React from "react";

export function TaskList({ tasks, type }) {
  return (
    <ul className={`${type}-list`}>
      {tasks.map((task) => (<TodoItem key={task.id} task={task}/>))}
    </ul>
  );
}