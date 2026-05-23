export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sri Senthil Spares and Service",
    "image": "https://yourwebsite.com/logo.png",
    "@id": "https://yourwebsite.com",
    "url": "https://yourwebsite.com",
    "telephone": "+910000000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Street, Local Area",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "Pincode",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.000000,
      "longitude": 80.200000
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
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
