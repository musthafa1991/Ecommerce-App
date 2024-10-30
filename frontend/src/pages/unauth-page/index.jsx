import React from "react";
import { Link } from "react-router-dom";

const UnauthorizedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
      <p className="text-lg mb-6">
        You do not have permission to view this page.
      </p>
      <Link to="auth/login" className="text-blue-500 underline">
        Go to Login
      </Link>
    </div>
  );
};

export default UnauthorizedPage;
