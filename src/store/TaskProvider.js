import React, {useEffect, useState} from 'react';
import {fetchTasks} from "../api/tasks";

export const TaskContext = React.createContext(null);
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  },[]);

  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
};


export default TaskProvider;