import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-8 mt-8">
    <div className="container mx-auto text-center space-y-4">
      <h2 className="text-xl font-semibold text-white tracking-wider">AIDSPOT GLOBAL</h2>
      <div className="space-y-2">
        <p className="flex justify-center sm:items-center space-x-2">
          <FaMapMarkerAlt className="text-gray-400 max-sm:hidden" />
          <span>444/1A – Chettipalayam Main Road, Coimbatore, Tamil Nadu, India – 641 050</span>
        </p>
        <p className="flex justify-center items-center space-x-2">
          <FaPhone className="text-gray-400" />
          <span>Call / WhatsApp: +91 99468 63316</span>
        </p>
        <p className="flex justify-center items-center space-x-2">
          <FaEnvelope className="text-gray-400" />
          <span>Email: <a href="mailto:mail@aidspotglobal.com" className="text-gray-400 hover:text-white transition-colors duration-300">mail@aidspotglobal.com</a></span>
        </p>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-6 pt-4">
      <p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} AIDSPOT GLOBAL. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
