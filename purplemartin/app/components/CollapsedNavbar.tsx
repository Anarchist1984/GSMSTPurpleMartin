'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import "./components.css";

const NavbarSm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        className="fixed top-0 right-0 m-4 p-2 rounded text-blue-500 flex items-center focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-8 w-8 mr-2 text-black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-gray-800 bg-opacity-75" onClick={toggleMenu}>
          <div className="absolute top-0 left-0 w-64 bg-white h-full shadow flex flex-col">
            <div className="flex items-center justify-between px-4 pb-4 pt-5">
              <Link href="/">
                <span className="text-4xl font-bold text-black">
                  Martin's Roost
                </span>
              </Link>
              <button className="p-2 rounded text-blue-500 underline" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="px-4 text-2xl">
              <li>
                <Link href="/projects">
                  <span className="text-black block py-3 px-4 hover:text-blue-500">
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-black block py-3 px-4 hover:text-blue-500">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/research">
                  <span className="text-black block py-3 px-4 hover:text-blue-500">
                    Research
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/account/signin">
                  <div className="px-4 py-3 rounded-md bg-gradient-to-r from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700">
                    <span className="cursor-pointer text-white font-semibold">
                      Researcher Dashboard
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarSm;
