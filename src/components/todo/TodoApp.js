import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginComponent from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/welcome" element={<WelcomePage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default TodoApp;
