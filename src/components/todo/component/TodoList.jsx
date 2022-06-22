import moment from "moment";
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

    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.addTodoClicked = this.addTodoClicked.bind(this);
    this.loadTodosByUser = this.loadTodosByUser.bind(this);
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getUserLoggedIn();
    TodoDataService.deleteTodo(username, id).then((res) => {
      this.setState({ message: `Delete of todo ${id} Successful!` });
      this.loadTodosByUser(username);
    });
  }

  updateTodoClicked(id) {
    console.log(`updated id=${id}`);
    this.props.navigate(`/todos/${id}`); //REACT-6
  }

  addTodoClicked() {
    this.props.navigate(`/todos/-1`); //REACT-6
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
                  <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                  <td>{todo.done ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => this.updateTodoClicked(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteTodoClicked(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.addTodoClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
