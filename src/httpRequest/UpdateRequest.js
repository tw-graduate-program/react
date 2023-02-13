import axios from "axios";

export function updateRequest({ id, name, status }) {
  return axios.put(`http://localhost:8080/tasks/${id}`,{
    "id": id,
    "name": name,
    "completed": status
  }).then(response => response.data);
}

export function deleteRequest(id) {
  return axios.delete(`http://localhost:8080/tasks/${id}`).then(response => response.data);
}

export function updateNameRequest(id, taskName, completed) {
  return axios.put(`http://localhost:8080/tasks/${id}`,{
    "name": taskName,
    "completed": completed
  }).then(response => response.data);
}