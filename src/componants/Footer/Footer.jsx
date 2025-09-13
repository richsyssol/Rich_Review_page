import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left Side - Logo / Name */}
        <div className="mb-4 md:mb-0 text-lg font-semibold">MyWebsite</div>

        {/* Middle - Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300">
            Support
          </a>
        </div>

        {/* Right Side - Copyright */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
