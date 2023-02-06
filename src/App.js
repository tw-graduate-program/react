import React, {useEffect, useState} from 'react';
import {fetchTasks} from "./api/tasks";
import {CompletedList} from "./components/CompletedList";
import {TodoList} from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  },[]);

  return (
    <div className="App">
      <TodoList tasks={tasks}/>
      <CompletedList tasks={tasks}/>
    </div>
  );
}

export default App;