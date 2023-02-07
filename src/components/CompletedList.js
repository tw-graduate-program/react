import React, {useContext} from "react";
import {TaskList} from "./TaskList";
import {TaskContext} from "../store/TaskProvider";

export function CompletedList() {
  const { tasks } = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <section>
      <h3>Completed</h3>
      <TaskList tasks={completedTasks} type="completed" />
    </section>
  );
}