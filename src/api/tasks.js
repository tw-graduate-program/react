import axios from "axios";

const TASK_URL = 'http://localhost:8080/tasks';
export const fetchTasks = () =>
  axios.get(TASK_URL).then((response) => response.data);