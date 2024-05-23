// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center align-center p-5 bg-white text-black">
      <div className="text-xl font-bold">
      <img src="/logo.png" alt="Logo" className="w-12 h-auto" />
      </div>
      <nav>
        <a href="#about" className="px-4">About</a>
        <a href="#portfolio" className="px-4">Portfolio</a>
        <a href="#contact" className="px-4">Contact</a>
      </nav>
      <input type="text" placeholder="Search..." className="p-2 rounded bg-gray-700 text-white"/>
    </header>
  );
};

export default Header;
