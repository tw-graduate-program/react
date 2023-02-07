import React, {useEffect, useState} from 'react';
import {fetchTasks} from "../api/tasks";

export const TaskContext = React.createContext(null);
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  },[]);

  const addTask = (task) => {
    setTasks([...tasks,task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return <TaskContext.Provider value={{tasks, addTask, deleteTask}}>{children}</TaskContext.Provider>;
};


export default TaskProvider;