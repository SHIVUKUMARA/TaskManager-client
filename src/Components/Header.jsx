// src/Components/Header.js

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext"; // Import context

const Header = () => {
  const { isLoggedIn, logout } = useContext(LoginContext); // Use login state and logout from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout function from context
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-white">
          Task Manager
        </NavLink>
        <div className="d-flex">
          {isLoggedIn ? (
            <>
              <NavLink to="/create" className="btn btn-success mx-2">
                Create Task
              </NavLink>
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-primary mx-2">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-secondary">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
