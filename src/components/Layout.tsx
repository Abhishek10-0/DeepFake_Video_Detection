import React from 'react';
import { Link } from 'react-router-dom';
import { GamepadIcon, Home } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center gap-2 text-gray-900">
                <GamepadIcon className="h-6 w-6" />
                <span className="font-bold text-xl">GameHub</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                <Home className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2024 GameHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;