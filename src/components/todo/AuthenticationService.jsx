class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("Successfull Authenticated");

    sessionStorage.setItem("authenticatedUser", username);
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
}

export default new AuthenticationService();
