import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import withNavigation from "./navigation/withNavigation";
import ErrorPage from "./pages/ErrorPage";
import withParams from "./params/withParams";

class TodoApp extends Component {
  render() {
    const LoginPageWithNavigation = withNavigation(LoginPage);

    const WelcomePageWithParams = withParams(WelcomePage);
    return (
      <div>
        <Routes>
          <Route path="/" element={<LoginPageWithNavigation />} />
          <Route path="/login" element={<LoginPageWithNavigation />} />
          <Route path="/welcome/:name" element={<WelcomePageWithParams />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default TodoApp;
