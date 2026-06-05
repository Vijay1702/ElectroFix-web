"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiPhone } from "react-icons/fi";

const reasons = [
  "Expert Technicians",
  "Genuine Spare Parts",
  "Fast & Reliable Service",
  "Affordable Pricing",
  "Years of Experience",
  "Customer Satisfaction Guaranteed"
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-[#0a4d52] z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[100px] transform translate-x-1/3 z-0" />
      
      <div className="max-w-[1600px] w-[96%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="inline-block py-1 px-3 rounded-full bg-white/10 text-primary border border-white/10 font-semibold tracking-wider uppercase mb-6 text-sm">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Good Quality Repairs You Can Trust</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <FiCheckCircle className="text-primary text-2xl flex-shrink-0" />
                  <span className="text-gray-100 font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/40 blur-3xl rounded-full" />
              <h4 className="text-3xl font-bold mb-6 text-white relative z-10">Need a Quick Fix?</h4>
              <p className="text-gray-300 mb-10 text-lg relative z-10">Call us today or visit our shop. We are ready to help.</p>
              <a href="tel:+919443631389" className="relative z-10 flex items-center justify-center gap-3 w-full bg-primary text-white px-6 py-5 rounded-2xl font-bold text-xl hover:bg-primary-hover hover:scale-105 transition-all shadow-[0_0_20px_rgba(12,185,193,0.3)]">
                <FiPhone size={28} /> Call +91 94436 31389
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
