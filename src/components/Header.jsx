import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-3xl shadow-md ">
      <div className="container mx-auto flex max-sm:flex-col max-sm:text-center justify-between items-center py-4 px-6 max-sm:px-1">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3 ">
          <img src="/companyLogo.svg" alt="Company Logo" className="w-12 h-12 max-[365px]:hidden"/>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            AIDSPOT GLOBAL
          </h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-base font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-800 font-semibold'
                    : 'text-gray-600 hover:text-blue-500 transition-colors'
                }
              >
                <span className="tracking-wider">Home</span>
              </NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink
                to="/manufacturing"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-800 font-semibold '
                    : 'text-gray-600 hover:text-blue-500 transition-colors'
                }
              >
                <span className="tracking-wider">Manufacturing</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
