import React, { Component } from "react";
import AuthenticationService from "../AuthenticationService";

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
    let username = this.state.username;
    let password = this.state.password;

    // AuthenticationService.executeBasicAuthenticationService(username, password)
    //   .then(() => {
    //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
    //     this.props.navigate(`/welcome/${this.state.username}`);
    //     this.setState({ isLoginSuccess: true, isLoginFailed: false });
    //   })
    //   .catch(() => {
    //     this.setState({ isLoginSuccess: false, isLoginFailed: true });
    //   });

    AuthenticationService.executeJwtAuthenticationService(username, password)
      .then((reponse) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          this.state.username,
          reponse.data.token
        );
        this.props.navigate(`/welcome/${this.state.username}`);
        this.setState({ isLoginSuccess: true, isLoginFailed: false });
      })
      .catch(() => {
        this.setState({ isLoginSuccess: false, isLoginFailed: true });
      });
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
