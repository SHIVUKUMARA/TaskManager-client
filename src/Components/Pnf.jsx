import React from "react";
import { Link } from "react-router-dom";

function Pnf() {
  return (
    <div className="container mt-5 text-center text-danger">
      <h1>Page Not Found</h1>
      <h3>404 Error</h3>
      <br />
      <br />
      <Link to="/" className="btn btn-primary fw-bold">
        Go Back
      </Link>
    </div>
  );
}

export default Pnf;
