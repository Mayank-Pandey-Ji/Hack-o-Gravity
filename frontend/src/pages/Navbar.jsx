import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import { Home, Info, Mail, MessageCircle, Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleNavigate = (path) => {
    navigate(path); // Actual navigation
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 w-full z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNavigate("/")}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            AlgoMind
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
          <button
            onClick={() => handleNavigate("/about")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
          >
            <Info className="w-4 h-4" />
            About
          </button>
          <button
            onClick={() => handleNavigate("/contact")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
          >
            <Mail className="w-4 h-4" />
            Contact
          </button>
          <button
            onClick={() => handleNavigate("/chatPage")}
            className="flex items-center gap-2 ml-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            Start Chatting
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-xl hover:bg-purple-50 focus:outline-none transition-colors duration-300"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-purple-600" />
            ) : (
              <Menu className="w-6 h-6 text-purple-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 px-6 py-4 space-y-2 border-t border-purple-100">
          <button
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl hover:bg-white hover:shadow-md text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
          >
            <Home className="w-5 h-5" />
            Home
          </button>
          <button
            onClick={() => handleNavigate("/about")}
            className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl hover:bg-white hover:shadow-md text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
          >
            <Info className="w-5 h-5" />
            About
          </button>
          <button
            onClick={() => handleNavigate("/contact")}
            className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl hover:bg-white hover:shadow-md text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
          >
            <Mail className="w-5 h-5" />
            Contact
          </button>
          <button
            onClick={() => handleNavigate("/chatPage")}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold mt-2"
          >
            <MessageCircle className="w-5 h-5" />
            Start Chatting
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
