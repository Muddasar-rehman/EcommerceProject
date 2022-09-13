import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>!404 ERROR!</h1>
      <h5>Sorry, The page you are requesting cannot be found.</h5>
      <p>
        Please go back to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
