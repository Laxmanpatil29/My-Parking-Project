import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-md">
        <div className="text-red-500 text-4xl mb-4">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.682 1.732-3L13.732 4c-.77-1.318-2.694-1.318-3.464 0L3.34 16c-.77 1.318.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold mb-2">Oops! Something went wrong.</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or an error occurred.
        </p>
        <Link to="/" className="bg-blue-600 no-underline hover:no-underline text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
