import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 fixed w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        <div className="flex items-center">
          <img src="/assets/Logo.jpeg" alt="Logo" className="h-12 w-12 rounded-full object-cover" />
        </div>

        <ul className="hidden md:flex space-x-6 text-white font-semibold">
          <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          <Link to="/department" className="hover:text-blue-300 transition">Department</Link>
          <Link to="/doctor" className="hover:text-blue-300 transition">Doctor</Link>
          <Link to="/about" className="hover:text-blue-300 transition">About</Link>
          <Link to="/services" className="hover:text-blue-300 transition">Services</Link>
        </ul>

        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="px-5 py-2 bg-white text-blue-600 rounded-md shadow  transition">Login</button>
          </Link>
          <Link to="/signup">
            <button className="px-5 py-2 bg-white text-blue-600 rounded-md shadow  transition">Sign Up</button>
          </Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-blue-100 text-white py-6 px-6 fixed top-20 left-0 w-full transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
      >
        <Link to="/" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/department" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Department</Link>
        <Link to="/doctor" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Doctor</Link>
        <Link to="/about" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/services" className="block py-2 active:bg-yellow-400 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/login">
          <button className="w-full py-2 mt-4 bg-white text-blue-600 rounded-md shadow hover:bg-yellow-400 transition">Login</button>
        </Link>
        <Link to="/signup">
          <button className="w-full py-2 mt-2 bg-white text-blue-600 rounded-md shadow hover:bg-blue-400 transition">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
