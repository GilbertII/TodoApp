import React, { Component } from "react";

class LoginComponent extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        Username:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleOnChange}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleOnChange}
        />
        <button>Login</button>
      </div>
    );
  }
}

export default LoginComponent;
