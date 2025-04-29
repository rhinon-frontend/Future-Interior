"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Fade animation for footer (only animates once in view for better LCP)
const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#000000] text-gray-300 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white">Future Interior</h2>
          <p className="mt-3 text-gray-400 max-w-xs">
            Designing spaces that reflect your personality and style.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition-all duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-all duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition-all duration-200">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-all duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: hello@futureinterior.com</p>
          <p className="text-gray-400">Phone: +91 9035746742</p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-[#4267B2] transition-all duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-[#E1306C] transition-all duration-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-[#0077b5] transition-all duration-200"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Future Interior. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
