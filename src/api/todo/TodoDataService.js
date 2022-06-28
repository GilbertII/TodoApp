import axios from "axios";
import { API_URL } from "../../Constants";

class TodoDataService {
  getAllTodosByUsers(username) {
    return axios.get(`${API_URL}/api/todo/users/${username}/todos`);
  }

  getTodosByUserAndId(username, id) {
    return axios.get(`${API_URL}/api/todo/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id) {
    return axios.delete(`${API_URL}/api/todo/users/${username}/todos/${id}`);
  }

  updateTodo(username, todo) {
    return axios.put(`${API_URL}/api/todo/users/${username}/todos/${todo.id}`, todo);
  }

  createTodo(username, todo) {
    return axios.post(`${API_URL}/api/todo/users/${username}/todos`, todo);
  }
}

export default new TodoDataService();
