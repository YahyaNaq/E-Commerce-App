import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
