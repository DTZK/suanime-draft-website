import React from 'react';
import { FaDiscord, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-[1250px] mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-white mb-6">
          Contact <span className="font-normal">Us</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Sample text. Click to select the text box. Click again or double
          click to start editing the text.
        </p>
      </div>

      {/* Discord */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Discord */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <FaDiscord className="text-black text-5xl" />
          </div>
          <h3 className="text-white text-sm font-bold tracking-wider mb-3">
            DISCORD
          </h3>
          <a 
            href="https://discord.gg/suanime" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-lg hover:text-purple-400 transition-colors"
          >
            SUANIME
          </a>
        </div>

        {/* Instagram */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <FaInstagram className="text-black text-5xl" />
          </div>
          <h3 className="text-gray-400 text-sm font-semibold tracking-wider mb-3">
            INSTAGRAM
          </h3>
          <a 
            href="https://www.instagram.com/sueanniemei/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-lg hover:text-purple-400 transition-colors"
          >
            @sueanniemei
          </a>
        </div>

        {/* Message/LinkedIn */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <FaEnvelope className="text-black text-5xl" />
          </div>
          <h3 className="text-gray-400 text-sm font-semibold tracking-wider mb-3">
            Message Us On
          </h3>
          <a 
            href="https://www.linkedin.com/company/suanime" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-lg hover:text-purple-400 transition-colors break-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;