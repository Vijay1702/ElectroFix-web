"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Ramesh K.",
    role: "Local Resident",
    content: "My ceiling fan stopped working in the middle of summer. Sri Senthil Electrofix fixed it within a day. Fast service and very reasonable pricing!",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Homeowner",
    content: "I took my mixer grinder here after the motor burnt out. They replaced the motor with genuine parts and it works like brand new now. Highly recommended.",
    rating: 5,
  },
  {
    name: "Suresh T.",
    role: "Farmer",
    content: "Excellent service for submersible pumps. The technicians are very knowledgeable and fixed our agricultural pump quickly.",
    rating: 4,
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1600px] w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Customer Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary">What Our Clients Say</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col relative"
            >
              <div className="text-primary text-4xl absolute top-6 right-8 opacity-20">&quot;</div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-gray-600 mb-8 flex-grow italic">&quot;{testimonial.content}&quot;</p>
              <div>
                <h4 className="font-bold text-secondary text-lg">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
