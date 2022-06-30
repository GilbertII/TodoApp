import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import AuthenticationService, {
  TOKEN_SESSION_ATTRIBUTE,
  USER_NAME_SESSION_ATTRIBUTE_NAME,
} from "./AuthenticationService";

class AuthenticatedRoute extends Component {
  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    else return true;
  }

  setupAxiosInterceptors() {
    axios.interceptors.request.use(
      async (config) => {
        if (this.isUserLoggedIn()) {
          config.headers.authorization = sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE);
        }

        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  componentDidMount() {
    this.setupAxiosInterceptors();
  }

  render() {
    if (AuthenticationService.isUserLoggedIn()) {
      return { ...this.props.children };
      //return <Route {...this.props} /> //REACT-4
    } else {
      return <Navigate to="/login" />;
      //return <Redirect to="/login" /> //REACT-4
    }
  }
}

export default AuthenticatedRoute;
