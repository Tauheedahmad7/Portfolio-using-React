import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  return (
    <nav className="bg-zinc-500 text-white fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Full Menu for Desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#education" className="hover:text-blue-400">Education</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <ul className="space-y-4 text-center py-4">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#education" className="hover:text-blue-400">Education</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
