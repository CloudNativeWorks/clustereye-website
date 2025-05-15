"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages, getPathWithLang, getLanguageFromPath, type Language } from "@/app/i18n";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = getLanguageFromPath(pathname);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case "tr":
        return "Türkçe";
      case "en":
        return "English";
      default:
        return String(lang).toUpperCase();
    }
  };
  
  const getLanguageFlag = (lang: Language) => {
    switch (lang) {
      case "tr":
        return "🇹🇷";
      case "en":
        return "🇬🇧";
      default:
        return "";
    }
  };
  
  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center px-3 py-1.5 text-sm rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition duration-150"
      >
        <span className="mr-1">{getLanguageFlag(currentLang)}</span>
        <span className="mr-1">{getLanguageLabel(currentLang)}</span>
        <svg
          className={`h-4 w-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-1 w-40 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <Link
              key={lang}
              href={getPathWithLang(pathname, lang)}
              locale={lang}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 text-sm hover:bg-gray-700 transition duration-150 ${
                currentLang === lang ? "text-indigo-400 font-medium" : "text-gray-300"
              }`}
            >
              <span className="mr-2">{getLanguageFlag(lang)}</span>
              {getLanguageLabel(lang)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}