export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sri Senthil Spares and Service",
    "image": "https://srisenthilspares.in/app-logo.png",
    "@id": "https://srisenthilspares.in",
    "url": "https://srisenthilspares.in",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
