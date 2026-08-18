"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiZap, FiSettings, FiTool, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0 bg-[#02080a]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0cb9c115_1px,transparent_1px),linear-gradient(to_bottom,#0cb9c115_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#02080a]/50 to-[#02080a]"></div>
      </div>

      {/* Floating Icons for dynamism */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-[10%] text-primary/30 text-5xl"><FiZap /></motion.div>
          <motion.div animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 right-[15%] text-primary/20 text-6xl"><FiSettings /></motion.div>
          <motion.div animate={{ y: [0, -15, 0], rotate: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 right-[10%] text-cyan-400/20 text-4xl"><FiTool /></motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-3 py-1.5 px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_#0CB9C1]"></span>
            </span>
            <span className="relative font-semibold tracking-widest uppercase text-xs text-gray-300">Welcome to Sri Senthil</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[4rem] lg:text-[5rem] font-black text-white leading-[1.1] tracking-tight mb-6 drop-shadow-2xl">
            Electrical Appliance Repair & Spare Parts in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-white">Pattukkottai</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Sri Senthil Spares & Services provides motor repair, fan repair, mixer grinder service, submersible motor repair and genuine electrical spare parts in <span className="text-gray-200 font-medium">Pattukkottai, Tamil Nadu</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a href="tel:+919443631389" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-hover transition-colors duration-300 flex items-center justify-center gap-2 shadow-md">
              <FiPhone size={20} /> Call Now
            </a>

            <a href="https://wa.me/918667264983" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1ea952] transition-colors duration-300 flex items-center justify-center gap-2 shadow-md">
              <FaWhatsapp size={20} /> WhatsApp Now
            </a>

            <a href="https://www.google.com/maps/search/?api=1&query=Sri+Senthil+Spares+and+Services,+Thalayari+St,+near+state+bank+of+India,+opposite+to+Sun+electronics,+Nadimuthu+Nagar,+Pattukkottai,+Tamil+Nadu+614601" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white/10 text-white border border-white/15 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/15 transition-colors duration-300 flex items-center justify-center gap-2">
              <FiMapPin size={20} /> Get Directions
            </a>
          </div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-white mb-1 drop-shadow-md">25+</span>
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Years Exp.</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-white mb-1 drop-shadow-md">100%</span>
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Genuine Parts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-white mb-1 drop-shadow-md">24/7</span>
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Support</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
