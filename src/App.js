import React, {useEffect, useState} from 'react';
import {fetchTasks} from "./api/tasksFetchTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  },[]);

  return (
    <div className="App">
      {tasks.map(task =>
        <li key={task.key}>
          <input type="checkbox" id={task.id} />
          <label htmlFor={task.id}>{task.name}</label>
        </li>)}
    </div>
  );
}

export default App;
