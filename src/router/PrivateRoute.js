import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const token = localStorage.getItem("bitcoin_conversion");

  return token ? <Route {...props} /> : <Redirect to="/auth/login" />;
};

export default PrivateRoute;
