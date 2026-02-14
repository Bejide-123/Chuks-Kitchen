import React, { useState } from "react";
import { Utensils, Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Explore", "My Orders", "Account"];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between px-16 py-4 bg-white border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif italic text-orange-400" style={{ fontFamily: 'Georgia, serif' }}>
            Chuk's Kitchen
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                activeNav === item
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {item}
              {activeNav === item && (
                <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-orange-500" />
              )}
            </button>
          ))}
        </div>

        {/* Login Button */}
        <button className="bg-orange-500 text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition">
          Login
        </button>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-white border-b border-gray-200">
        {/* Top bar with logo left, hamburger right */}
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo on left */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif italic text-orange-400" style={{ fontFamily: 'Georgia, serif' }}>
              Chuk's Kitchen
            </span>
          </div>
          
          {/* Hamburger menu on right */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white shadow-lg">
            <div className="px-4 py-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveNav(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg mb-1 transition ${
                    activeNav === item
                      ? "bg-orange-50 text-orange-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
              <button 
                className="w-full mt-2 bg-orange-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;