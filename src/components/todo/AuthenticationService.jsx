import axios from "axios";

class AuthenticationService {
  executeJwtAuthenticationService(username, password) {
    return axios.post("http://localhost:8080/authenticate", { username, password });
  }

  executeBasicAuthenticationService(username, password) {
    return axios.get("http://localhost:8080/api/basicauth", {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(`${username}:${password}`);
  }

  createJwtToken(username, token) {
    return "Bearer " + token;
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem("authenticatedUser", username);

    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  registerSuccessfulLoginForJwt(username, token) {
    sessionStorage.setItem("authenticatedUser", username);

    this.setupAxiosInterceptors(this.createJwtToken(username, token));
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

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }

      return config;
    });
    console.log("Is loggedIn", this.isUserLoggedIn());
  }
}

export default new AuthenticationService();
