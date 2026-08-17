import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface ServiceSEOLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  imagePath?: string;
  features: string[];
  commonProblems?: string[];
  brands?: string[];
}

export default function ServiceSEOLayout({
  title,
  subtitle,
  description,
  imagePath,
  features,
  commonProblems,
  brands,
}: ServiceSEOLayoutProps) {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sri Senthil Spares & Services",
      "telephone": "+919443631389",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pattukkottai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "614601",
        "addressCountry": "IN"
      }
    },
    "description": description,
    "areaServed": {
      "@type": "City",
      "name": "Pattukkottai"
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{title}</h1>
          <p className="text-xl text-primary font-medium">{subtitle}</p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {description}
            </p>
            
            <h2 className="text-2xl font-bold text-secondary mb-6">Our Services & Expertise</h2>
            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {brands && brands.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-secondary mb-6">Brands Serviced</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {brands.map((brand, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-600 font-medium">
                      {brand}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="space-y-8">
            {imagePath && (
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image src={imagePath} alt={title} fill className="object-cover" />
              </div>
            )}

            {commonProblems && commonProblems.length > 0 && (
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-4">Common Problems We Fix</h3>
                <ul className="space-y-3">
                  {commonProblems.map((problem, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Why Choose Sri Senthil?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We use genuine spare parts, offer fast reliable service, and have years of experience serving the Pattukkottai community.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919443631389" className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-colors">
              <FiPhone className="text-xl" /> Call Now
            </a>
            <a href="https://wa.me/918667264983" className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#25D366] transition-colors">
              <FaWhatsapp className="text-xl" /> WhatsApp Us
            </a>
            <Link href="/contact" className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors">
              <FiMapPin className="text-xl" /> View Location
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
