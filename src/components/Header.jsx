import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-5 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <div className="text-xl font-bold text-black">Digitrix.agency</div>

        {/* Desktop Nav */}
        <nav className="hidden space-x-6 md:flex">
          <a href="#" className="transition hover:text-blue-600">Demos</a>
          <a href="#" className="transition hover:text-blue-600">Pages</a>
          <a href="#" className="transition hover:text-blue-600">Support</a>
          <a href="#" className="transition hover:text-blue-600">Contact</a>
        </nav>

        {/* Get Quote Button */}
        <button className="hidden px-4 py-2 text-white transition bg-blue-600 rounded-lg md:block hover:bg-blue-700">
          Get A Free Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          className="px-3 py-2 text-gray-700 border rounded md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="px-4 mt-2 space-y-2 bg-white rounded md:hidden">
          <a href="#" className="block py-2 transition hover:text-blue-600">Demos</a>
          <a href="#" className="block py-2 transition hover:text-blue-600">Pages</a>
          <a href="#" className="block py-2 transition hover:text-blue-600">Support</a>
          <a href="#" className="block py-2 transition hover:text-blue-600">Contact</a>
          <button className="w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
            Get A Free Quote
          </button>
        </nav>
      )}
    </header>
  );
}
