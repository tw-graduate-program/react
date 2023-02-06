import React, {useEffect, useState} from 'react';
import {fetchTasks} from "./api/tasks";
import {TodoItem} from "./components/TodoItem";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  },[]);

  return (
    <div className="App">
      <ul className="todo-list">
        {tasks.filter((task) => !task.completed).map((task) => (
          <TodoItem key={task.key} task={task}/>
        ))}
      </ul>
      <ul className="completed-list">
        {tasks.filter((task) => task.completed).map((task) => (
          <TodoItem key={task.key} task={task}/>
        ))}
      </ul>
    </div>
  );
}

export default App;