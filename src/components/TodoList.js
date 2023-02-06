import {TodoItem} from "./TodoItem";
import React, {useContext} from "react";
import {TaskList} from "./TaskList";
import {TaskContext} from "../store/TaskProvider";

export function TodoList() {
  const tasks = useContext(TaskContext);
  const todoTasks = tasks.filter((task) => !task.completed);
  return (
    <TaskList tasks={todoTasks} type="todo" />
  );
}