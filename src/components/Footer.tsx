import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Sri Senthil</h3>
            <p className="text-gray-300 text-sm font-semibold tracking-widest uppercase mb-4">
              Spares & Services
            </p>
            <p className="text-gray-400 leading-relaxed">
              Trusted Electrical Appliance Sales & Repair Service. We provide high-quality repairs and genuine spare parts for all your household and business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/#home" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-primary transition-colors">Products & Services</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Motor & Pump Repair</li>
              <li className="text-gray-400">Fan & Mixer Service</li>
              <li className="text-gray-400">Gas Stove Service</li>
              <li className="text-gray-400">Home Appliances</li>
              <li className="text-gray-400">Genuine Spare Parts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-primary text-xl flex-shrink-0 mt-1" />
                <a href="https://share.google/zF98iFkhc8xrBtUDc" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">Click here to open in Google Maps</a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-primary text-xl flex-shrink-0" />
                <a href="tel:+919443631389" className="text-gray-400 hover:text-primary transition-colors">+91 94436 31389</a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-primary text-xl flex-shrink-0" />
                <a href="https://wa.me/918667264983" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">Chat on WhatsApp</a>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-primary text-xl flex-shrink-0 mt-1" />
                <p className="text-gray-400 leading-relaxed">
                  Mon - Sat: 9:30 AM - 9:30 PM<br/>
                  Sunday: 9:30 AM - 3:00 PM
                </p>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sri Senthil Spares & Service. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
