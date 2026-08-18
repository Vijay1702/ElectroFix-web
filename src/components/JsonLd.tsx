const SITE_URL = "https://srisenthilelectrofixin.vercel.app";
const BUSINESS_NAME = "Sri Senthil Spares & Services";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_NAME,
    "image": `${SITE_URL}/app-logo.png`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": "+919443631389",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thalayari Street, near state bank of India, opposite to Sun electronics, Nadimuthu Nagar",
      "addressLocality": "Pattukkottai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "614601",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.42376,
      "longitude": 79.31642
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:30",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:30",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://wa.me/918667264983"
    ]
  };

  // Tells Google explicitly what this site's own brand identity is —
  // without this, a shared *.vercel.app domain can get attributed to
  // "Vercel" in search results instead of the actual business.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BUSINESS_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/app-logo.png`,
    "sameAs": [
      "https://wa.me/918667264983"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": BUSINESS_NAME,
    "url": SITE_URL
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
