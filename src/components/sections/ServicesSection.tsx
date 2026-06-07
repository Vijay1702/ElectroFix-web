"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiTool, FiShoppingCart, FiActivity, FiWind, FiSettings } from "react-icons/fi";

const categories = [
  {
    title: "Repair Services",
    icon: <FiTool className="text-primary text-3xl" />,
    items: [
      {
        name: "Motor Repair",
        desc: "Complete servicing and rewinding of water motors.",
        icon: <FiActivity />,
        image: "/images/motor.png",
      },
      {
        name: "Fan Repair",
        desc: "Ceiling fans, table fans, and exhaust fans service.",
        icon: <FiWind />,
        image: "/images/fan.png",
      },
      {
        name: "Mixer Grinder Service",
        desc: "Blade replacement, motor repair, and general servicing.",
        icon: <FiSettings />,
        image: "/images/mixer.png",
      },
      {
        name: "Submersible Repair",
        desc: "Expert winding and repair for submersible motors.",
        icon: <FiActivity />,
        image: "/images/submersible.png",
      },
    ],
  },
  {
    title: "Products & Spares",
    icon: <FiShoppingCart className="text-accent text-3xl" />,
    items: [
      {
        name: "Mixie Spares",
        desc: "Jar, OLP, body, coupler, mixie motor, carbon brush, armature, carbon brush holder, bush, card wire, rotary switch, shaft.",
        icon: <FiShoppingCart />,
        image: "/images/mixer_spare_parts.png",
      },
      {
        name: "Grinder Spares",
        desc: "Motor, switch, wire, chainset, handle bush, moulding rod, grinder post, grinder side arm, grinder pulley, belt.",
        icon: <FiShoppingCart />,
        image: "/images/grinder_spare_parts.png",
      },
      {
        name: "Fan Spares",
        desc: "Motor, condenser, condenser clamp, blade.",
        icon: <FiShoppingCart />,
        image: "/images/fan_spare_parts.png",
      },
      {
        name: "Table Fan Spares",
        desc: "Motor, leaf, condenser, switch.",
        icon: <FiShoppingCart />,
        image: "/images/table_fan_spare_parts.png",
      },
      {
        name: "Water Motor Spares",
        desc: "Flange, flange washer (Vassar), cooling fan, oil seal, non-return valve.",
        icon: <FiShoppingCart />,
        image: "/images/motor_spare_parts.png",
      },
      {
        name: "Gas Stove Spares",
        desc: "Stove top, burner, pipe, lighter, jet, cork, knob, clip, regulator.",
        icon: <FiShoppingCart />,
        image: "/images/gas_stove_spare_parts.png",
      },
      {
        name: "Cooker Spares",
        desc: "Gasket, weight, steam vent, safety valve, handle, side handle.",
        icon: <FiShoppingCart />,
        image: "/images/cooker_spare_parts.png",
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-[1600px] w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
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
                      <div className="relative w-full h-56 overflow-hidden bg-gray-100">
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
  );
}
