import axios from "axios";
import { API_URL } from "../../Constants";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "username";
export const PASSWORD_SESSION_ATTRIBUTE_NAME = "password";
export const TOKEN_SESSION_ATTRIBUTE = "USER_TOKEN";

class AuthenticationService {
  executeJwtAuthenticationService(username, password) {
    return axios.post(`${API_URL}/authenticate`, { username, password });
  }

  createJwtToken(username, token) {
    return "Bearer " + token;
  }

  registerSuccessfulLoginForJwt(username, password, token) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem(PASSWORD_SESSION_ATTRIBUTE_NAME, password);
    sessionStorage.setItem(TOKEN_SESSION_ATTRIBUTE, token);

    this.setupAxiosInterceptors(this.createJwtToken(username, token));
  }

  logout() {
    console.log("Successfull Logout");
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(PASSWORD_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(TOKEN_SESSION_ATTRIBUTE);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

    if (user === null) return false;
    else return true;
  }

  getUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

    if (user === null) return "";
    else return user;
  }

  getPasswordLoggedIn() {
    let pass = sessionStorage.getItem(PASSWORD_SESSION_ATTRIBUTE_NAME);

    if (pass === null) return "";
    else return pass;
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use(
      async (config) => {
        if (this.isUserLoggedIn()) {
          if (token) {
            config.headers.authorization = token;
          } else {
            config.headers.authorization = sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE);
          }
        }

        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }
}

export default new AuthenticationService();
