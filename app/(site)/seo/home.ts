import type { Metadata } from "next";

import { DOMAIN_URL } from "@/lib/config";
import { baseMetadata } from "@/lib/seo/seo-seed";

export const homePageSeo: Metadata = {
  ...baseMetadata,

  title: "McKinley Law | New York Law Firm – Free Legal Consultation",

  description:
    "McKinley Law is a New York–based law firm providing professional legal services to individuals and businesses. Free initial legal consultation available by appointment.",

  alternates: {
    canonical: `${DOMAIN_URL}/`,
  },

  openGraph: {
    type: "website",
    url: `${DOMAIN_URL}/`,
    siteName: "McKinley Law",
    title: "McKinley Law | Trusted New York Law Firm",
    description:
      "Professional legal services for individuals and businesses in New York City. Schedule a free initial legal consultation with McKinley Law.",
    locale: "en_US",
    images: [
      {
        url: `${DOMAIN_URL}/og_image.png`,
        width: 1200,
        height: 630,
        alt: "McKinley Law – New York Law Firm",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "McKinley Law | New York Law Firm",
    description:
      "Professional legal representation in New York City. Free initial consultation available by appointment.",
    images: {
      url: `${DOMAIN_URL}/og_image.png`,
      alt: "McKinley Law – NYC Legal Services",
    },
  },
};
