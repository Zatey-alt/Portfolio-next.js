import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing FontAwesome search icon

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white text-black font-semibold align-middle">
      <div className="text-xl font-bold">
        <img src="/logo.png" alt="Logo" className="w-12 h-auto" />
      </div>
      <nav>
        <a href="#about" className="px-4">About</a>
        <a href="#portfolio" className="px-4">Portfolio</a>
        <a href="#experience" className="px-4">Experience</a>
        <a href="#contact" className="px-4">Contact</a>
      </nav>
      <div className="relative">
        <input type="text" placeholder="Search..." className="p-2 rounded bg-black text-white pl-10 w-48" />
        <div className="absolute top-0 left-3 flex items-center h-full">
          <FaSearch className="text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
