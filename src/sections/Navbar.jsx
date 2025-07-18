import { useState } from 'react';

import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    // <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="flex justify-between items-center py-5 mx-auto c-space">
    //       <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
    //         Muhammad Salman Nazeer
    //       </a>

    //       <button
    //         onClick={toggleMenu}
    //         className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
    //         aria-label="Toggle menu">
    //         <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
    //       </button>

    //       <nav className="sm:flex hidden">
    //         <NavItems />
    //       </nav>
    //     </div>
    //   </div>

    //   <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
    //     <nav className="p-5">
    //       <NavItems onClick={closeMenu} />
    //     </nav>
    //   </div>
    // </header>
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Muhammad Salman Nazeer
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavItems />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}>
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-2 pt-2 pb-4 space-y-2">
            <NavItems onClick={closeMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


// NAVBAR DONE