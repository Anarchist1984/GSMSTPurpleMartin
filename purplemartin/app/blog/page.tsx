import React from "react";
import Navbar from "../components/Navbar";
import NavbarSm from "../components/CollapsedNavbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <NavbarSm />
      <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8"></div>
    </main>
  );
}
