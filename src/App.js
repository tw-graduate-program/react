import React, {useEffect, useState} from 'react';
import {CompletedList} from "./components/CompletedList";
import {TodoList} from "./components/TodoList";
import TaskProvider from "./store/TaskProvider";

function App() {
  return (
    <TaskProvider>
      <TodoList />
      <CompletedList />
    </TaskProvider>
  );
}

export default App;