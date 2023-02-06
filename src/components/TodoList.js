import {TodoItem} from "./TodoItem";
import React from "react";
import {TaskList} from "./TaskList";

export function TodoList(props) {
  const todoTasks = props.tasks.filter((task) => !task.completed);
  return (
    <TaskList tasks={todoTasks} type="todo" />
  );
}