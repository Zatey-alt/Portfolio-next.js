// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 w-full ">
      <div className="container mx-auto text-center">
        <p className="text-sm">Copyright © {new Date().getFullYear()} | Michael Zatey</p>
      </div>
    </footer>
  );
};

export default Footer;