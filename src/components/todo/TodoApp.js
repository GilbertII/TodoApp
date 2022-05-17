import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import PageNavigation from "./navigation/PageNavigation";
import ErrorPage from "./pages/ErrorPage";

function TodoApp() {
  const LoginPageNavigation = PageNavigation(LoginPage);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPageNavigation />} />
        <Route path="/login" element={<LoginPageNavigation />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default TodoApp;
