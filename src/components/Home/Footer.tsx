"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#000000] text-gray-300 py-16 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white">Future Interior</h2>
          <p className="mt-4 text-gray-400 max-w-xs">
            Designing spaces that reflect your personality and style.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
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
              className="text-white hover:text-[#4267B2]"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-[#E1306C]"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-[#0077b5]"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Future Interior. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
