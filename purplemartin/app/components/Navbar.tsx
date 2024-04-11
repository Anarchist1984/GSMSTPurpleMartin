"use client";
import React from "react";
import Link from "next/link";
import "./components.css";

const Navbar = () => {
  const navbarHeight = 64;

  return (
    <div>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-1000 backdrop-blur-sm`}
        style={{ height: `${navbarHeight}px` }}
      >
        <nav className="container mx-auto flex flex-wrap justify-between items-center h-full">
          <Link href="/">
            <span className="cursor-pointer text-xl font-bold underline-animation">
              Martin's Roost
            </span>
          </Link>
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-28 items-center font-semibold">
            <li>
              <Link href="/projects">
                <span className="cursor-pointer underline-animation">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span className="cursor-pointer underline-animation">Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/research">
                <span className="cursor-pointer underline-animation">
                  Research
                </span>
              </Link>
            </li>
          </ul>
          <Link
            href="/account/signin"
            className={`text-white from-indigo-400 to-indigo-600 px-4 py-2 rounded-md bg-gradient-to-r hover:from-indigo-400 hover:to-blue-700 font-bold transition duration-300`}
          >
            Researcher Dashboard
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
