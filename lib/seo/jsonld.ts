import { CONTACT_PHONE_NUMBER, DOMAIN_URL } from "../config";

export const McKinleyLawJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${DOMAIN_URL}/#mckinley-law`,
  url: DOMAIN_URL,
  name: "McKinley Law",
  description:
    "McKinley Law is a New York–based law firm providing professional legal services to individuals and businesses. Free initial consultation available by appointment.",
  image: [`${DOMAIN_URL}/logo.svg`],
  telephone: "+1-212-555-0198",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "350 5th Ave, Suite 7200",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10118",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7484405,
    longitude: -73.9856644,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: { CONTACT_PHONE_NUMBER },
    contactType: "legal consultation",
    availableLanguage: ["en"],
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "New York City",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Consultation",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Free Initial Legal Consultation",
        price: "0",
        priceCurrency: "USD",
        description:
          "Free initial consultation to review your legal matter and determine the best course of action.",
      },
    ],
  },
};
