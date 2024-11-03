import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700 p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-6 text-center">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
