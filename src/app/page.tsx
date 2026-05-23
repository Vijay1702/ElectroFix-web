"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheckCircle, FiTool, FiSettings, FiShoppingCart, FiMapPin, FiPhone, FiActivity, FiWind, FiClock, FiArrowRight, FiZap } from "react-icons/fi";
import { FaFire, FaWhatsapp } from "react-icons/fa";

const services = [
  { icon: <FiTool className="text-4xl text-primary" />, title: "Electrical Repair", desc: "Expert repair for motors, fans, and home appliances." },
  { icon: <FiShoppingCart className="text-4xl text-accent" />, title: "Spare Parts", desc: "Genuine spare parts for a wide range of electrical appliances." },
  { icon: <FiSettings className="text-4xl text-primary" />, title: "Gas Stove Service", desc: "Safe and reliable repair and maintenance for gas stoves." },
];

const categories = [
  {
    title: "Repair Services",
    icon: <FiTool className="text-primary text-3xl" />,
    items: [
      { name: "Motor Repair", desc: "Complete servicing and rewinding of water motors.", icon: <FiActivity />, image: "/images/motor.png" },
      { name: "Fan Repair", desc: "Ceiling fans, table fans, and exhaust fans service.", icon: <FiWind />, image: "/images/fan.png" },
      { name: "Mixer Grinder Service", desc: "Blade replacement, motor repair, and general servicing.", icon: <FiSettings />, image: "/images/mixer.png" },
      { name: "Gas Stove Repair", desc: "Burner cleaning, pipe replacement, and safety checks.", icon: <FaFire />, image: "/images/gas_stove.png" },
    ]
  },
  {
    title: "Products & Spares",
    icon: <FiShoppingCart className="text-accent text-3xl" />,
    items: [
      { name: "Mixer Grinders", desc: "Latest models from top brands.", icon: <FiShoppingCart />, image: "" },
      { name: "Water Pumps", desc: "High-efficiency pumps for residential use.", icon: <FiShoppingCart />, image: "" },
      { name: "Induction Stoves", desc: "Energy-efficient induction cooktops.", icon: <FiShoppingCart />, image: "" },
      { name: "Genuine Spare Parts", desc: "Motors, blades, wires, switches, and more.", icon: <FiShoppingCart />, image: "" },
    ]
  }
];

const reasons = [
  "Expert Technicians",
  "Genuine Spare Parts",
  "Fast & Reliable Service",
  "Affordable Pricing",
  "Years of Experience",
  "Customer Satisfaction Guaranteed"
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappNumber = "918667264983";
    const text = `*New Service Request!*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service Required:* ${formData.service}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
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
            <h1 className="text-5xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-black text-white leading-[1.1] tracking-tight mb-6 drop-shadow-2xl">
              Fast & Reliable <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-primary/20 blur-2xl rounded-full"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-white">Repairs</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              We fix fans, motors, grinders, and gas stoves <span className="text-gray-200 font-medium">quickly</span> and <span className="text-gray-200 font-medium">affordably</span>. Genuine spare parts available.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="#services" className="group relative w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-[0_0_30px_rgba(12,185,193,0.5)] overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative flex items-center gap-2">Our Services <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
              </Link>
              
              <Link href="#contact" className="group w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Contact Us
              </Link>
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

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Image src="/images/about.png" alt="Sri Senthil Spares & Services Shop" fill className="object-cover" />
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
                Welcome to Sri Senthil Spares and Service. We are your trusted local experts for all electrical appliance repairs. Whether it's a broken fan, a motor that won't start, or a mixer grinder that needs fixing, we get it done.
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary">Our Products & Services</h3>
          </div>
          
          <div className="space-y-24">
            {categories.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-12 border-b border-gray-200 pb-4">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col group"
                    >
                      {item.image && (
                        <div className="relative w-full h-56 overflow-hidden">
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                          <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="p-8 flex-grow">
                        <div className="text-primary text-3xl mb-6 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">{item.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-[#0a4d52] z-0" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[100px] transform translate-x-1/3 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary">Contact Us</h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Information */}
            <div className="lg:w-1/3 space-y-10">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-full text-primary">
                      <FiMapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-secondary mb-1">Our Location</h4>
                      <a href="https://share.google/zF98iFkhc8xrBtUDc" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">Click here to open in Google Maps</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-full text-primary">
                      <FiPhone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-secondary mb-1">Phone Number</h4>
                      <a href="tel:+919443631389" className="text-gray-600 hover:text-primary transition-colors">+91 94436 31389</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#25D366]/10 p-4 rounded-full text-[#25D366]">
                      <FaWhatsapp size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-secondary mb-1">WhatsApp</h4>
                      <a href="https://wa.me/918667264983" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary transition-colors">+91 86672 64983</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-full text-primary">
                      <FiClock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-secondary mb-1">Business Hours</h4>
                      <p className="text-gray-600">Mon - Sat: 9:30 AM - 9:30 PM<br/>Sunday: 9:30 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12">
                <h4 className="text-2xl font-bold text-secondary mb-8">Send Us A Message</h4>
                <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50" 
                        placeholder="+91 00000 00000" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Required</label>
                    <select 
                      id="service" 
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50 text-gray-700"
                    >
                      <option value="">Select a service</option>
                      <option value="Motor Repair">Motor Repair</option>
                      <option value="Fan Service">Fan Service</option>
                      <option value="Mixer Grinder Repair">Mixer Grinder Repair</option>
                      <option value="Gas Stove Service">Gas Stove Service</option>
                      <option value="Other">Other / Spares</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">How can we help?</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50 resize-none" 
                      placeholder="Describe the issue with your appliance..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Send Message <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
