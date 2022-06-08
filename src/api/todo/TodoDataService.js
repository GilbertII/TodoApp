import axios from "axios";

class TodoDataService {
  getAllTodosByUsers(username) {
    return axios.get(`http://localhost:8080/api/todo/users/${username}/todos`);
  }

  deleteTodoByUserAndId(username, todoId) {
    return axios.delete(`http://localhost:8080/api/todo/users/${username}/todos/${todoId}`);
  }
}

export default new TodoDataService();
