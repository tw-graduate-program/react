import {TodoItem} from "./TodoItem";
import React from "react";

export function CompletedList(props) {
  return (
    <section>
      <h3>Completed</h3>
      <ul className="completed-list">
        {props.tasks.filter((task) => task.completed).map((task) => (<TodoItem key={task.key} task={task}/>))}
      </ul>
    </section>
  );
}