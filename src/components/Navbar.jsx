import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    shop: false,
    lookbook: false,
    newIn: false,
  });

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  return (
    <nav className="relative bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-10 w-auto" src="/logo/logo.png" alt="Hellozitu Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6 text-lg font-medium">
            <Link to="/" className="text-gray-800 hover:text-purple-600 transition">Home</Link>
            <Link to="/shop" className="text-gray-800 hover:text-purple-600 transition">Shop</Link>
            <Link to="/features" className="text-gray-800 hover:text-purple-600 transition">Features</Link>

            {/* New In Dropdown */}
            <div className="relative">
              <button onClick={() => toggleDropdown('newIn')} className="flex items-center text-gray-800 hover:text-purple-600 transition focus:outline-none">
                <span>New In</span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${dropdowns.newIn ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              {dropdowns.newIn && (
                <ul className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md z-10">
                  <li><Link to="/trending" className="block px-4 py-2 hover:bg-gray-100">Trending Now</Link></li>
                  <li><Link to="/new-arrivals" className="block px-4 py-2 hover:bg-gray-100">Just Arrived</Link></li>
                </ul>
              )}
            </div>

            {/* Lookbook Dropdown */}
            <div className="relative">
              <button onClick={() => toggleDropdown('lookbook')} className="flex items-center text-gray-800 hover:text-purple-600 transition focus:outline-none">
                <span>Lookbook</span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${dropdowns.lookbook ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              {dropdowns.lookbook && (
                <ul className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md z-10">
                  <li><Link to="/summer-collection" className="block px-4 py-2 hover:bg-gray-100">Summer Collection</Link></li>
                  <li><Link to="/winter-trends" className="block px-4 py-2 hover:bg-gray-100">Winter Trends</Link></li>
                </ul>
              )}
            </div>

            <Link to="/blog" className="text-gray-800 hover:text-purple-600 transition">Blog</Link>
            <Link to="/buy-now" className="text-gray-800 hover:text-purple-600 transition">Buy Now!</Link>
          </div>

          {/* Login/Profile Section */}
          <div className="hidden md:flex md:items-center space-x-2">
            <span className="text-xl">&#128100;</span>
            <Link to="/login" className="text-gray-800 hover:text-purple-600 transition">Login Your Profile</Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle Menu">
              <div className="space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
