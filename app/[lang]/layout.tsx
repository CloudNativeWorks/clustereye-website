import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { getTranslations, type Language } from "../i18n";
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const resolvedParams = await params;
  const translations = await getTranslations(resolvedParams.lang);
  
  return {
    title: translations.metadata.title,
    description: translations.metadata.description,
    metadataBase: new URL('https://clustereye.com'),
    alternates: {
      languages: {
        'en': `/en`,
        'tr': `/tr`,
      },
    },
    openGraph: {
      title: translations.metadata.title,
      description: translations.metadata.description,
      url: 'https://clustereye.com',
      siteName: 'ClusterEye',
      images: [
        {
          url: 'https://clustereye.com/images/og-image.jpg', // Need to add this image to your public/images directory
          width: 1200,
          height: 630,
          alt: 'ClusterEye - Database Monitoring',
        }
      ],
      locale: resolvedParams.lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: translations.metadata.title,
      description: translations.metadata.description,
      images: ['https://clustereye.com/images/og-image.jpg'], // Same as OpenGraph image
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Language };
}) {
  const translations = await getTranslations(params.lang);
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ClusterEye",
    "description": translations.metadata.description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "ClusterEye",
      "url": "https://clustereye.com"
    }
  };

  return (
    <html lang={params.lang} className="scroll-smooth">
      <head>
        <link rel="canonical" href={`https://clustereye.com/${params.lang}`} />
        
        {/* Schema.org structured data */}
        <Script
          id="schema-org-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Navigation translations={translations} />
        <main>{children}</main>
        <Footer translations={translations} />
        <Analytics />
      </body>
    </html>
  );
} 