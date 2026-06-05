"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-[1600px] w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 z-10" />
              {/* Fallback styling for the Image since we don't know if /images/about.png exists */}
              <div className="w-full h-full bg-gray-200 absolute inset-0"></div>
              <Image src="/images/about.png" alt="Sri Senthil Spares & Services Shop" fill className="object-cover relative z-0" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">About Us</h2>
            <h3 className="text-3xl font-bold text-secondary mb-6">Your Local Repair Shop</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to Sri Senthil Spares and Service. We are your trusted local experts for all electrical appliance repairs. Whether it&apos;s a broken fan, a motor that won&apos;t start, or a mixer grinder that needs fixing, we get it done.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We know how important your daily appliances are, which is why we offer fast service at affordable prices. We also sell genuine spare parts to make sure your appliances run smoothly for a long time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Experienced Mechanics",
                "Original Spare Parts",
                "Honest Prices",
                "Fast Service"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FiCheckCircle className="text-accent text-xl" />
                  <span className="font-semibold text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
