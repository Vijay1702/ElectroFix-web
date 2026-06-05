"use client";

// Removed unused framer-motion import

const brands = [
  "Preethi",
  "Havells",
  "Crompton",
  "Usha",
  "Bajaj",
  "Philips",
  "V-Guard",
  "Orient",
  "Butterfly"
];

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden flex flex-col justify-center">
      <div className="max-w-[1600px] w-[96%] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-8">
        <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase">Brands We Service & Sell</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-4xl font-black text-gray-200 hover:text-primary transition-colors duration-300 select-none uppercase tracking-wider"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
