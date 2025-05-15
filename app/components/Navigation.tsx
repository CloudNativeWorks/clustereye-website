"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { getLanguageFromPath } from "@/app/i18n";

interface NavigationProps {
  translations: {
    navigation: {
      features: string;
      docs: string;
      pricing: string;
      blog: string;
      contact: string;
    };
  };
}

export default function Navigation({ translations }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const lang = getLanguageFromPath(pathname);
  
  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex items-center">
              <Image 
                src="/clustereye_logo.png" 
                alt="ClusterEye Logo" 
                width={40} 
                height={40} 
                className="mr-3" 
                style={{ width: 'auto', height: 'auto' }}
              />
              <span className="text-xl font-bold text-white">ClusterEye</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href={`/${lang}/features`} className="text-gray-300 hover:text-white transition duration-300">
              {translations.navigation.features}
            </Link>
            <Link href={`/${lang}/docs`} className="text-gray-300 hover:text-white transition duration-300">
              {translations.navigation.docs}
            </Link>
            <Link href={`/${lang}/pricing`} className="text-gray-300 hover:text-white transition duration-300">
              {translations.navigation.pricing}
            </Link>
            <Link href={`/${lang}/blog`} className="text-gray-300 hover:text-white transition duration-300">
              {translations.navigation.blog}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition duration-300"
            >
              {translations.navigation.contact}
            </Link>
            
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-b border-gray-800">
            <Link 
              href={`/${lang}/features`} 
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {translations.navigation.features}
            </Link>
            <Link 
              href={`/${lang}/docs`} 
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {translations.navigation.docs}
            </Link>
            <Link 
              href={`/${lang}/pricing`} 
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {translations.navigation.pricing}
            </Link>
            <Link 
              href={`/${lang}/blog`} 
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {translations.navigation.blog}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className="block px-3 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
            >
              {translations.navigation.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 