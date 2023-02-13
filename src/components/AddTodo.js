import axios from "axios";
import {useContext, useState} from "react";
import {TaskContext} from "../store/TaskProvider";

export function AddTodo() {
  const [todo, setTodo] = useState('');
  const { tasks, addTask } = useContext(TaskContext);
  const handleClick = () => {
    axios.post('http://localhost:8080/tasks', {
      name: todo,
      completed: false,
    })
    .then((response) => response.data)
    .then((data) => {
      addTask(data);
    });
    setTodo('');
  };

  return (
    <section>
      <input
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          className='todo-input'
          placeholder="Enter your todo item"
      />
      <button onClick={handleClick} className="add-btn">
        +
      </button>
    </section>

  );
}