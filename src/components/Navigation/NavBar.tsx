"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useUser, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

// Dynamically import icons
const Menu = dynamic(() => import("lucide-react").then((mod) => mod.Menu));
const X = dynamic(() => import("lucide-react").then((mod) => mod.X));

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="fixed top-7 left-7 right-7 mx-auto flex flex-col uppercase justify-center items-center max-w-7xl shadow-[0_10px_70px_rgba(32,32,29,0.12)] bg-[#f8f8f8] z-50 transition-colors duration-300">
      <div className="w-full px-5 py-4">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/mainlogo.webp"
              width={120}
              height={60}
              alt="Future Interio Logo"
              className="object-contain"
              priority
              quality={100}
              sizes="(min-width: 768px) 120px, 100vw"
            />
          </Link>

          <div className="flex gap-10 text-base font-medium text-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {isLoaded && user ? (
              <button
                onClick={handleLogout}
                className="text-lg font-medium text-white bg-[#1E1FBF] hover:bg-[#141594] px-6 py-2 rounded-md transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/get-started"
                className="text-lg font-medium text-white bg-[#1E1FBF] hover:bg-[#141594] px-6 py-2 rounded-md transition-colors duration-200"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center justify-between md:hidden text-black">
          <Link href="/" className="flex items-center">
            <Image
              src="/mainlogo.webp"
              width={120}
              height={60}
              alt="Future Interio Logo"
              className="object-contain"
              priority
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 mt-4 text-base font-medium uppercase text-black bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-md md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {isLoaded && user ? (
              <button
                onClick={handleLogout}
                className="text-lg font-medium text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-center"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/signup"
                className="text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-center"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
