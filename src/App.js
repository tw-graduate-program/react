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
      {tasks.map(task => (
        <TodoItem key={task.key} task={task}/>
      ))}
    </div>
  );
}

export default App;