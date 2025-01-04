import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">GameHub</span>
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 