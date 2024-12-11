import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm mb-2">© 2024 Your Name. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl hover:text-gray-400"></i>
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl hover:text-gray-400"></i>
          </a>
          <a href="mailto:youremail@example.com">
            <i className="fas fa-envelope text-2xl hover:text-gray-400"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
