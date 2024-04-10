"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./components.css";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarHeight = 64;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`bg-${scrollPosition > 0 ? "transparent" : "indigo-500"} dark:bg-indigo-900 fixed top-0 w-full z-50 transition-all duration-1000 backdrop-blur-sm`}
        style={{ height: `${navbarHeight}px` }}
      >
        <nav className="container mx-auto flex justify-between items-center h-full">
          <Link href="/">
            <span className="cursor-pointer text-xl font-bold underline-animation">
              Martin's Roost
            </span>
          </Link>
          <ul className="flex space-x-28 items-center justify-center font-semibold">
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
              <Link href="/about">
                <span className="cursor-pointer underline-animation">
                  About
                </span>
              </Link>
            </li>
          </ul>
          <Link
            href="/account/signin"
            className={`text-${scrollPosition > 0 ? "#0f0047" : "white"} hover:text-${scrollPosition > 0 ? "white" : "black"} from-indigo-400 to-indigo-600 px-4 py-2 rounded-md bg-gradient-to-r hover:from-indigo-400 hover:to-blue-700 font-bold transition duration-300`}
          >
            Researcher Dashboard
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
