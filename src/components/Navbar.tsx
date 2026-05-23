"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiPhone, FiMapPin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/#home" },
    { name: "About Us", path: "/#about" },
    { name: "Products & Services", path: "/#services" },
    { name: "Contact Us", path: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/#home" className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden flex-shrink-0 bg-white rounded-full">
              <Image src="/app-logo.png" alt="Sri Senthil Spares & Services Logo" fill className="object-contain p-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">Sri Senthil</span>
              <span className="text-[10px] md:text-xs font-semibold text-secondary tracking-widest uppercase">Spares & Services</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-secondary font-medium hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+919443631389" 
              className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors shadow-lg hover:shadow-xl"
            >
              <FiPhone /> Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+919443631389"
                className="flex items-center justify-center gap-2 w-full mt-4 bg-primary text-white px-5 py-3 rounded-full font-medium shadow-md"
              >
                <FiPhone /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
