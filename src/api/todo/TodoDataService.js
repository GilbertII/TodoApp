import axios from "axios";

class TodoDataService {
  getAllTodosByUsers(username) {
    return axios.get(`http://localhost:8080/api/todo/users/${username}/todos`);
  }

  getTodosByUserAndId(username, id) {
    return axios.get(`http://localhost:8080/api/todo/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id) {
    return axios.delete(`http://localhost:8080/api/todo/users/${username}/todos/${id}`);
  }

  updateTodo(username, todo) {
    return axios.put(`http://localhost:8080/api/todo/users/${username}/todos/${todo.id}`, todo);
  }

  createTodo(username, todo) {
    return axios.post(`http://localhost:8080/api/todo/users/${username}/todos`, todo);
  }
}

export default new TodoDataService();
