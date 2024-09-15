import React from 'react';
import { Link } from 'react-scroll'; // Smooth scroll for navigation

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-3xl shadow-md">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-3">
        <img src="/companyLogo.svg" alt="Company Logo" className="w-12 h-12"/>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          AIDSPOT GLOBAL
        </h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="manufacturing"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Manufacturing
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
