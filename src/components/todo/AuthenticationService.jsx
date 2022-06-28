import axios from "axios";
import { API_URL } from "../../Constants";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

class AuthenticationService {
  executeJwtAuthenticationService(username, password) {
    return axios.post(`${API_URL}/authenticate`, { username, password });
  }

  executeBasicAuthenticationService(username, password) {
    return axios.get(`${API_URL}/api/basicaut`, {
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
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);

    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  registerSuccessfulLoginForJwt(username, token) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);

    this.setupAxiosInterceptors(this.createJwtToken(username, token));
  }

  logout() {
    console.log("Successfull Logout");
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

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
