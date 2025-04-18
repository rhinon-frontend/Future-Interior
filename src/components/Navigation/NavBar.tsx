"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`relative z-[1000] py-6 transition-colors duration-300 ${
        isOpen ? "bg-[#49543e]" : isHome ? "bg-transparent" : "bg-red-500"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5">
        {/* Desktop Nav */}
        <div
          className="hidden md:grid items-center"
          style={{
            gridTemplateColumns: "1fr 0.7fr 1fr",
          }}
        >
          <div
            className={`flex gap-8 items-center ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Work
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
          </div>

          <div
            className={`flex justify-center ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            <a href="/" className="text-xl font-bold">
              Future Interio
            </a>
          </div>

          <div
            className={`flex justify-end ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div
          className={`md:hidden flex justify-between items-center ${
            isHome ? "text-white" : "text-black"
          }`}
        >
          <a href="/" className="text-xl font-bold">
            Future Interio
          </a>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div
            className={`md:hidden flex flex-col gap-6 mt-6 text-lg uppercase ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Work
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
