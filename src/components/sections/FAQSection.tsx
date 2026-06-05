"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "Do you provide a warranty on repairs?",
    answer: "Yes, we provide a 3-month warranty on motor rewinding and a 1-month warranty on general repairs, provided the issue is related to the specific repair we performed."
  },
  {
    question: "How long does a motor rewind take?",
    answer: "Typically, a complete motor rewind takes between 24 to 48 hours depending on the motor size and our current workload. We always strive to return your equipment as quickly as possible."
  },
  {
    question: "Do you do home visits for repairs?",
    answer: "We primarily operate out of our workshop for major repairs. However, for large appliances or electrical wiring issues, we can arrange a technician visit to your home. Please call us to schedule."
  },
  {
    question: "Do you sell genuine spare parts?",
    answer: "Yes, we stock and sell 100% genuine spare parts for all major brands including Preethi, Havells, Crompton, Usha, and more."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Have Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary">Frequently Asked Questions</h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-primary/50 bg-primary/5' : 'border-gray-200 bg-white'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-left text-lg text-secondary">{faq.question}</span>
                <FiChevronDown 
                  className={`text-xl text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
