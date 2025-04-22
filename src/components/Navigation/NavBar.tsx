"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
  ];

  return (
    <nav
      className={`fixed top-7 left-7 right-7 mx-auto flex flex-col uppercase justify-center items-center max-w-7xl shadow-[0_10px_70px_rgba(32,32,29,0.12)] z-50 transition-colors duration-300 ${
        isOpen || !isHome ? "bg-white" : "bg-[#f6f1eb]"
      }`}
    >
      <div className="w-full px-5 py-4">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left: Logo */}
          <a href="/" className="text-2xl  text-black">
            Future Interior
          </a>

          {/* Center: Nav Links */}
          <div className="flex gap-10 text-base font-medium text-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Contact */}
          <a
            href="#contact"
            className="text-lg font-medium text-white rounded hover:bg-[#a35f42] transition-colors px-6 py-2"
            style={{
              backgroundColor: "#b47250",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center justify-between md:hidden text-black">
          <a href="/" className="text-xl font-bold">
            Future Interior
          </a>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="flex flex-col gap-6 mt-4 text-sm font-medium uppercase text-black bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md md:hidden">
            {[...navLinks, { label: "Contact", href: "#contact" }].map(
              (link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
