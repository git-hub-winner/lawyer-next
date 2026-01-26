import "./globals.css";

import { Metadata } from "next";
import { DM_Sans, DM_Serif_Text } from "next/font/google";
import Script from "next/script";

import { GA4 } from "@/lib/seo/GA4";
import { McKinleyLawJsonLd } from "@/lib/seo/jsonld";

import { homePageSeo } from "./(site)/seo/home";

export const metadata: Metadata = homePageSeo;

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
});

interface RootProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${dmSans.variable} antialiased`}>
        {children}

        <Script
          id="mckinley-law-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(McKinleyLawJsonLd),
          }}
        />

        <GA4 />
      </body>
    </html>
  );
}
