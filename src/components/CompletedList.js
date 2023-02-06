import React from "react";
import {TaskList} from "./TaskList";

export function CompletedList(props) {
  const completedTasks = props.tasks.filter((task) => task.completed);
  return (
    <section>
      <h3>Completed</h3>
      <TaskList tasks={completedTasks} type="completed" />
    </section>
  );
}