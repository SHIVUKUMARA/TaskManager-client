import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(LoginContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
