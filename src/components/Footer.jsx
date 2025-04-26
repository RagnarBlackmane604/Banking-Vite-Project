import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2d314d] text-white py-8 px-6 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
          <img src="../../assets/logo.svg" alt="Logo" className="h-5 md:h-6" />
          <div className="flex gap-4">
            <img src="../../assets/icon-facebook.svg" alt="Facebook" />
            <img src="../../assets/icon-youtube.svg" alt="Youtube" />
            <img src="../../assets/icon-twitter.svg" alt="Twitter" />
            <img src="../../assets/icon-pinterest.svg" alt="Pinterest" />
            <img src="../../assets/icon-instagram.svg" alt="Instagram" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400 text-center md:text-left">
          <a href="#About">About Us</a>
          <a href="#Contact">Contact</a>
          <a href="#Blog">Blog</a>
          <a href="#Career">Career</a>
          <a href="#Support">Support</a>
          <a href="#Privacy">Privacy Policy</a>
        </div>

        <div className="mt-6 md:mt-0 text-center md:text-right">
          <button className="bg-gradient-to-r from-lime-400 to-cyan-500 text-white rounded-full px-6 py-2">
            Request Invite
          </button>
          <p className="text-xs text-gray-400 mt-2">&copy; Easybank. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
