import React from "react";

const Navbar = () => {
  return (
    <header className=" shadow-md">
      <nav className="flex items-center justify-between px-[4%] py-3 md:px-6">
        <img
          className="w-[max(10%,80px)] cursor-pointer"
          src="/images/martian-hero.jpg"
          alt="Admin Panel Logo"
        />

        <button className="bg-gray-900 text-white text-base px-6 py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
