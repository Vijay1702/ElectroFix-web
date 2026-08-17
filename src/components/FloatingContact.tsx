"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
    <>
      {/* Desktop Floating Icons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-4">
        {/* Call Button */}
        <motion.a
          href="tel:+919443631389"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-primary-hover hover:scale-110 transition-all duration-300"
          aria-label="Call Now"
        >
          <FiPhone size={24} />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/918667264983"
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={32} />
        </motion.a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex bg-white border-t border-gray-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a 
          href="tel:+919443631389" 
          className="flex-1 flex items-center justify-center gap-2 py-4 text-primary font-bold text-lg border-r border-gray-200 bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <FiPhone size={22} /> Call
        </a>
        <a 
          href="https://wa.me/918667264983" 
          target="_blank" 
          rel="noreferrer" 
          className="flex-1 flex items-center justify-center gap-2 py-4 text-[#25D366] font-bold text-lg bg-green-50 active:bg-green-100 transition-colors"
        >
          <FaWhatsapp size={22} /> WhatsApp
        </a>
      </div>
    </>
  );
}
