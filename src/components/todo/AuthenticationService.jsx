import axios from "axios";

class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("Successfull Authenticated");

    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors();
  }

  logout() {
    console.log("Successfull Logout");
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");

    if (user === null) return false;
    else return true;
  }

  getUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");

    if (user === null) return "";
    else return user;
  }

  setupAxiosInterceptors() {
    let username = "user";
    let password = "user";

    let basicAuthHeaderString = "Basic " + window.btoa(`${username}:${password}`);

    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeaderString;
      }

      return config;
    });
    console.log("Is loggedIn", this.isUserLoggedIn());
  }
}

export default new AuthenticationService();
