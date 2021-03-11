import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-between items-center py-4 md:py-0 px-4 border-b border-gray-200 md:border-b-0">
          <div className="text-3xl font-bold">Brand</div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline:none focus:outline-none block md:hidden"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className={isOpen ? "block" : "hidden"}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path
                  className={!isOpen ? "block" : "hidden"}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row w-screen justify-between self-center py-4 md:py-0 items-center`}
        >
          <div className="flex flex-col md:flex-row md:mx-auto">
            <a href="/" className="block px-4 py-2 md:py-6">
              Home
            </a>
            <a href="/" className="block px-4 py-2 md:py-6">
              About
            </a>
            <a href="/" className="block px-4 py-2 md:py-6">
              Contact
            </a>
          </div>
          <div className="flex flex-col md:flex-row">
            <a href="/" className="block px-4 py-2 md:py-6">
              <button className="px-4 bg-blue-600 text-white font-medium rounded py-1">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
