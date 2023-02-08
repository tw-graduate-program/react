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

  const updateTask = ({ id, name, status }) => {
    const newTaskList = tasks.map(task => {
      if (task.id === id) {
        return {
          "id": id,
          "name": name,
          "completed": status
        }
      } else {
        return task;
      }
    });
    setTasks(newTaskList);
  }

  return <TaskContext.Provider value={{tasks, addTask, deleteTask, updateTask}}>{children}</TaskContext.Provider>;
};


export default TaskProvider;