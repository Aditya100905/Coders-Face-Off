import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/not-found');
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-300">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-white">Hellozitu</h2>
          <hr className="w-20 border-gray-500 my-4" />
          <div className="space-y-2 text-sm">
            <p className="flex items-center space-x-2"><span className="text-purple-400">📍</span> <span>Gautam Buddha Uttar Pradesh</span></p>
            <p className="flex items-center space-x-2"><span className="text-purple-400">📧</span> <span>hellozitu2011@gmail.com</span></p>
            <p className="flex items-center space-x-2"><span className="text-purple-400">📞</span> <span>+91 8800652059</span></p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Other Pages</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="hover:text-purple-400 cursor-pointer" onClick={handleNavigation}>Home</li>
            <li className="hover:text-purple-400 cursor-pointer" onClick={handleNavigation}>About Us</li>
            <li className="hover:text-purple-400 cursor-pointer" onClick={handleNavigation}>Services</li>
            <li className="hover:text-purple-400 cursor-pointer" onClick={handleNavigation}>Projects</li>
            <li className="hover:text-purple-400 cursor-pointer" onClick={handleNavigation}>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="hover:text-purple-400 cursor-pointer" onClick={handleNavigation}>Privacy Policy</li>
            <li className="hover:text-purple-400 cursor-pointer" onClick={handleNavigation}>Term Of Service</li>
            <li className="hover:text-purple-400 cursor-pointer" onClick={handleNavigation}>Disclaimer</li>
            <li className="hover:text-purple-400 cursor-pointer" onClick={handleNavigation}>Credits</li>
            <li className="hover:text-purple-400 cursor-pointer" onClick={handleNavigation}>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Newsletter</h3>
          <div className="mt-4 flex bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 text-black focus:outline-none"
            />
            <button className="bg-purple-500 text-white px-6 py-2 hover:bg-purple-600 transition-all">Subscribe</button>
          </div>
          <p className="text-gray-400 text-sm mt-2">Get the latest news & updates</p>
          <div className="mt-4 flex space-x-4 text-xl">
            <span className="bg-purple-500 p-2 rounded-full hover:bg-purple-400 cursor-pointer">📸</span>
            <span className="bg-purple-500 p-2 rounded-full hover:bg-purple-400 cursor-pointer">📘</span>
            <span className="bg-purple-500 p-2 rounded-full hover:bg-purple-400 cursor-pointer">🐦</span>
            <span className="bg-purple-500 p-2 rounded-full hover:bg-purple-400 cursor-pointer">🔗</span>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-500 text-sm">
        <p>Social Media Marketing Agency Template Kit by Jitendra Singh</p>
        <p className="mt-2">Copyright © 2022 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
