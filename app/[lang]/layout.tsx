import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { getTranslations, type Language } from "../i18n";

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
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Language };
}>) {
  const resolvedParams = await params;
  const translations = await getTranslations(resolvedParams.lang);
  
  return (
    <html lang={resolvedParams.lang} className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <Navigation translations={translations} />
        <main className="pt-16">{children}</main>
        <Footer translations={translations} />
      </body>
    </html>
  );
} 