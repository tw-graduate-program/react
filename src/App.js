import React, {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
        .get('http://localhost:8080/tasks')
        .then((response) => response.data)
        .then((data) => setTasks(data));
  },[]);

  return (
    <div className="App">
      {tasks.map(task => <li key={task.key}>{task.name}</li>)}
    </div>
  );
}

export default App;
