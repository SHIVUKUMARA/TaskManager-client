// src/Components/PrivateRoute.js

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext"; // Import context

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(LoginContext); // Get login state from context

  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Redirect to login if not logged in
  }

  return children; // If logged in, render children
};

export default PrivateRoute;
