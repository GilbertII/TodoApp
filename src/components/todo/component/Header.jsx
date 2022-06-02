import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../AuthenticationService";

class Header extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    console.log(isUserLoggedIn);

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="#">
            Gilbert II
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                {isUserLoggedIn && (
                  <Link className="nav-link" to="/welcome/test">
                    Home
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isUserLoggedIn && (
                  <Link className="nav-link" to="/todos">
                    Todos
                  </Link>
                )}
              </li>
            </ul>
            <ul className="navbar-nav mr-auto navbar-collapse justify-content-end">
              <li className="nav-item">
                {!isUserLoggedIn && (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isUserLoggedIn && (
                  <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
