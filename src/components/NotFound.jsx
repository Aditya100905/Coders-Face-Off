import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-6">
      <div className="max-w-md w-full bg-white shadow-2xl p-8 rounded-3xl text-center border border-gray-200">
        <h1 className="text-8xl font-extrabold text-red-500 drop-shadow-lg">404</h1>
        <p className="mt-4 text-2xl font-bold text-gray-800">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-600">
          The page you are looking for might have been removed or doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          ⬅️ Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
