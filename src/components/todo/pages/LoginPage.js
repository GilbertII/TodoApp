import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LoginPage.module.css";

class LoginComponent extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      isLoginSuccess: false,
      isLoginFailed: false,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }
  showMessage() {
    if (this.setState.isLogin) {
      return <div>success</div>;
    } else {
      return null;
    }
  }

  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLoginClick() {
    // username: test, password: test
    if (this.state.username === "test" && this.state.password === "test") {
      this.props.navigate(`/welcome/${this.state.username}`);

      console.log("success");
      this.setState({ isLoginSuccess: true, isLoginFailed: false });
    } else {
      console.log("failed");
      this.setState({ isLoginSuccess: false, isLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginMessage
          isLoginSuccess={this.state.isLoginSuccess}
          isLoginFailed={this.state.isLoginFailed}
        />
        <div className="container">
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <button className="btn btn-success" onClick={this.handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

function LoginMessage(props) {
  return (
    <div className="container">
      {props.isLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
      {props.isLoginSuccess && <div>Login Successul!</div>}
    </div>
  );
}

export default LoginComponent;
