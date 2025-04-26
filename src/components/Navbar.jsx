import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="../../assets/logo.svg" alt="Easybank Logo" className="h-5 md:h-6" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-600">
          <a href="#Home" className="hover:text-black">Home</a>
          <a href="#About" className="hover:text-black">About</a>
          <a href="#Contact" className="hover:text-black">Contact</a>
          <a href="#Blog" className="hover:text-black">Blog</a>
          <a href="#Career" className="hover:text-black">Career</a>
        </div>

        {/* Request Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
            Request Invite
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button>
            <span className="sr-only">Open Menu</span>
            <img src="../../assets/icon-hamburger.svg" alt="Hamburger Icon" className="h-3 md:h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
