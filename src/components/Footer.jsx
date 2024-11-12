import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">
          &copy; {currentYear} Shivam Singh. All rights reserved.
        </p>
        
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/kraken300" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>

          <a
            href="mailto:shivamsingh113355@gmail.com"
            className="text-white hover:text-gray-400 transition"
            aria-label="Email"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>

        <button
          className="mt-4 text-emerald-500 hover:text-emerald-400 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
