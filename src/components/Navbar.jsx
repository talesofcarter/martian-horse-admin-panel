import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
const Navbar = ({ setToken }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function signOut() {
    setIsMenuOpen(false);
    setToken("");
  }

  return (
    <header className="custom-shadow sticky top-0 z-50 bg-white">
      <nav className="flex items-center justify-between px-[4%] py-3 md:px-6">
        <img
          className="w-[max(10%,80px)] cursor-pointer"
          src="/images/martian-hero.jpg"
          alt="Admin Panel Logo"
        />

        {/* Logout button for desktop */}
        <button
          onClick={() => setToken("")}
          className="hidden md:block bg-gray-900 text-white text-base px-6 py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
        >
          Logout
        </button>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-gray-800 hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <CgMenuRight className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ zIndex: 40 }} // Ensure it appears below navbar but above content
      >
        <div className="flex flex-col py-2 px-4 border-t border-gray-100">
          {/* Menu Header */}
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-700">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-1"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="py-2 space-y-1">
            <a
              href="/add"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              <span className="text-sm font-medium">Add Items</span>
            </a>

            <a
              href="/list"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <span className="text-sm font-medium">List Items</span>
            </a>

            <a
              href="/orders"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="text-sm font-medium">Orders</span>
            </a>

            {/* Logout Button */}
            <button
              className="w-full mt-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
              onClick={signOut}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
