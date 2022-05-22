import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import withNavigation from "./navigation/withNavigation";
import ErrorPage from "./pages/ErrorPage";
import withParams from "./params/withParams";
import TodoList from "./component/TodoList";
import Header from "./component/Header";
import Footer from "./component/Footer";

import "./bootstrap.css";

class TodoApp extends Component {
  render() {
    const LoginPageWithNavigation = withNavigation(LoginPage);

    const WelcomePageWithParams = withParams(WelcomePage);
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPageWithNavigation />} />
          <Route path="/login" element={<LoginPageWithNavigation />} />
          <Route path="/welcome/:username" element={<WelcomePageWithParams />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
