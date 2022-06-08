import React, { Component } from "react";
import TodoDataService from "../../../api/todo/TodoDataService";
import AuthenticationService from "../AuthenticationService";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // { id: 1, description: "Learning Basic React", done: false, targetDate: new Date() },
        // { id: 2, description: "Learning Advance React", done: false, targetDate: new Date() },
        // { id: 3, description: "Learning Expert React", done: false, targetDate: new Date() },
      ],
    };
  }

  componentDidMount() {
    let username = AuthenticationService.getUserLoggedIn();

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
