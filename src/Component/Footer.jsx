import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> 2 Balogun Street Sango Otta Ogun State</p>
          <p className="flex items-center gap-2 mt-2"><FaPhone /> 09067422592</p>
          <p className="flex items-center gap-2 mt-2"><FaEnvelope /> contact@hospital.com</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-blue-400 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-blue-400 text-2xl"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
