import React, {useEffect, useState} from 'react';
import {fetchTasks} from "./api/tasksFetchTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  },[]);

  return (
    <div className="App">
      {tasks.map(task => <li key={task.key}>{task.name}</li>)}
    </div>
  );
}

export default App;
