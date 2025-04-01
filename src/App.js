import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edittask from "./Components/Edittask";
import Taskform from "./Components/Taskform";
import { LoginProvider } from "./Context/LoginContext";
import Pnf from "./Components/Pnf";
const App = () => {
  return (
    <LoginProvider>
      <Router>
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="create" element={<Taskform />} />
            <Route path="/edit-task/:taskId" element={<Edittask />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/*" element={<Pnf />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer autoClose={3000} hideProgressBar position="top-right" />
    </LoginProvider>
  );
};

export default App;
