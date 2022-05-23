class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("successfullAuthenticated");

    sessionStorage.setItem("authenticatedUser", username);
  }
}

export default new AuthenticationService();
