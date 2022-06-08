import axios from "axios";

class TodoDataService {
  getAllTodosByUsers(username) {
    return axios.get(`http://localhost:8080/api/todo/users/${username}/todos`);
  }
}

export default new TodoDataService();
