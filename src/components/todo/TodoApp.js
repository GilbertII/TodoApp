import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import ErrorPage from "./pages/ErrorPage";
import LogoutPage from "./pages/LogoutPage";

import withParams from "./params/withParams";
import withNavigation from "./navigation/withNavigation";

import TodoList from "./component/TodoList";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Todo from "./component/Todo";

import AuthenticatedRoute from "./AuthenticatedRoute";

class TodoApp extends Component {
  render() {
    const LoginPageWithNavigation = withNavigation(LoginPage);

    const WelcomePageWithParams = withParams(WelcomePage);

    const HeaderWithNavigation = withNavigation(Header);

    const TodoListWithNavigation = withNavigation(TodoList);

    const TodoWithParamsAndNavigation = withParams(withNavigation(Todo));

    return (
      <div>
        <HeaderWithNavigation />
        <Routes>
          <Route path="/" element={<LoginPageWithNavigation />} />
          <Route path="/login" element={<LoginPageWithNavigation />} />
          <Route
            path="/welcome/:username"
            element={
              <AuthenticatedRoute>
                <WelcomePageWithParams />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/todos/:id"
            element={
              <AuthenticatedRoute>
                <TodoWithParamsAndNavigation />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/todos"
            element={
              <AuthenticatedRoute>
                <TodoListWithNavigation />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <AuthenticatedRoute>
                <LogoutPage />
              </AuthenticatedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
