import React from 'react';
import {CompletedList} from "./components/CompletedList";
import {TodoList} from "./components/TodoList";
import TaskProvider from "./store/TaskProvider";
import {AddTodo} from "./components/AddTodo";
import './styles/todo-lists.scss';

function App() {
  return (
    <TaskProvider>
      <AddTodo />
      <TodoList />
      <CompletedList />
    </TaskProvider>
  );
}

export default App;