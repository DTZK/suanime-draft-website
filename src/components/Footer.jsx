import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white py-8 pb-0 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-[1400px] mx-auto px-12 flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* Left side - Logo and description */}
        <div className="mb-6 md:mb-0">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
            <img 
              src="/path-to-SUA-logo.png" 
              alt="SUA Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <p className="text-sm max-w-xs leading-relaxed">
            Insert brief description here
          </p>
          
          {/* Social media icons */}
          <div className="flex gap-4 mt-4">
            <a 
              href="https://facebook.com/your-page" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/sueanniemei/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://discord.gg/suanime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              <FaDiscord size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/company/suanime/posts/?feedView=all"
              className="hover:text-purple-300 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Right side - Navigation links */}
        <nav className="flex gap-8 text-sm">
          <Link 
            to="/events" 
            className="hover:text-purple-300 transition-colors"
          >
            Events
          </Link>
          <Link 
            to="/sponsors" 
            className="hover:text-purple-300 transition-colors"
          >
            Sponsors
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-purple-300 transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
      
      {/* Copyright section */}
      <div className="max-w-[1400px] mx-auto px-12 mt-8 pt-6 pb-8 border-t border-gray-600">
        <p className="text-xs text-gray-300 text-center">© 2026</p>
        <p className="text-xs text-gray-300 text-center mt-1">Me</p>
      </div>
    </div>
  );
};

export default Footer;