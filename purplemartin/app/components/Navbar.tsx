import React from "react";
import Link from "next/link";
import "./components.css";

const Navbar = () => {
  return (
    <header className="bg-indigo-500 dark:bg-indigo-900">
      <nav className="container mx-auto flex justify-between items-center h-16">
        <Link href="/">
          <span className="cursor-pointer text-white text-xl font-bold hover:underline hover:animate-pulse">
            Martin's Roost
          </span>
        </Link>
        <ul className="flex space-x-4 items-center justify-center">
          <li>
            <Link href="/projects">
              <span className="cursor-pointer text-white hover:underline hover:animate-pulse">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span className="cursor-pointer text-white hover:underline hover:animate-pulse">
                Blog
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="cursor-pointer text-white hover:underline hover:animate-pulse">
                About
              </span>
            </Link>
          </li>
        </ul>
        <Link
          href="/account/signin"
          className="bg-white text-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-400 hover:text-white font-bold"
        >
          Researcher Dashboard
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
