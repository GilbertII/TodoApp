import React from "react";
import { Navigate } from "react-router-dom";

import AuthenticationService from "./AuthenticationService";

function AuthenticatedRoute(props) {
  if (AuthenticationService.isUserLoggedIn()) {
    return { ...props.children };
    //return <Route {...this.props} /> //REACT-4
  } else {
    return <Navigate to="/login" />;
    //return <Redirect to="/login" /> //REACT-4
  }
}

export default AuthenticatedRoute;
