import React, { Component } from "react";
import TodoDataService from "../../../api/todo/TodoDataService";
import AuthenticationService from "../AuthenticationService";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: null,
    };

    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.loadTodosByUser = this.loadTodosByUser.bind(this);
  }

  handleTodoDelete(keyId) {
    let username = AuthenticationService.getUserLoggedIn();
    TodoDataService.deleteTodoByUserAndId(username, keyId).then((res) => {
      {
        this.setState({ message: `Delete of todo ${keyId} Successful!` });
        this.loadTodosByUser(username);
      }
    });
  }

  componentDidMount() {
    let username = AuthenticationService.getUserLoggedIn();
    this.loadTodosByUser(username);
  }

  loadTodosByUser(username) {
    TodoDataService.getAllTodosByUsers(username).then((res) => {
      console.log(res);
      this.setState(() => {
        return { todos: [...res.data] };
      });
    });
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Target Date</th>
                <th scope="col">Is Completed?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>{todo.done ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleTodoDelete(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TodoList;
