import React, { Component } from "react";

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
        <LoginMessage
          isLoginSuccess={this.state.isLoginSuccess}
          isLoginFailed={this.state.isLoginFailed}
        />
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
        <button onClick={this.handleLoginClick}>Login</button>
      </div>
    );
  }
}

function LoginMessage(props) {
  return (
    <div>
      {props.isLoginSuccess && <span>Login Successul!</span>}
      {props.isLoginFailed && <span>Invalid Credentials</span>}
    </div>
  );
}

export default LoginComponent;
