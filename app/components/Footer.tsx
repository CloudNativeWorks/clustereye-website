"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { getLanguageFromPath } from "@/app/i18n";
import { usePathname } from "next/navigation";

interface FooterProps {
  translations: {
    navigation: {
      features: string;
      docs: string;
      pricing: string;
      blog: string;
      contact: string;
    };
    footer: {
      description: string;
      product: string;
      company: string;
      support: string;
      updates: string;
      about: string;
      careers: string;
      helpCenter: string;
      statusPage: string;
      privacy: string;
      terms: string;
      copyright: string;
    };
  };
}

export default function Footer({ translations }: FooterProps) {
  const pathname = usePathname();
  const lang = getLanguageFromPath(pathname);
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="col-span-1 md:col-span-1">
            <Link href={`/${lang}`} className="flex items-center">
              <Image 
                src="/clustereye_logo.png" 
                alt="ClusterEye Logo" 
                width={36} 
                height={36} 
                className="mr-3" 
                style={{ width: 'auto', height: 'auto' }}
              />
              <span className="text-xl font-bold text-white">ClusterEye</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              {translations.footer.description}
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Ürün Bağlantıları */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{translations.footer.product}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={`/${lang}/features`} className="text-gray-400 hover:text-white text-sm">
                  {translations.navigation.features}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/pricing`} className="text-gray-400 hover:text-white text-sm">
                  {translations.navigation.pricing}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/docs`} className="text-gray-400 hover:text-white text-sm">
                  {translations.navigation.docs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/updates`} className="text-gray-400 hover:text-white text-sm">
                  {translations.footer.updates}
                </Link>
              </li>
            </ul>
          </div>

          {/* Şirket Bağlantıları */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{translations.footer.company}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={`/${lang}/about`} className="text-gray-400 hover:text-white text-sm">
                  {translations.footer.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/career`} className="text-gray-400 hover:text-white text-sm">
                  {translations.footer.careers}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/blog`} className="text-gray-400 hover:text-white text-sm">
                  {translations.navigation.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-400 hover:text-white text-sm">
                  {translations.navigation.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Destek Bağlantıları */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{translations.footer.support}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={`/${lang}/help`} className="text-gray-400 hover:text-white text-sm">
                  {translations.footer.helpCenter}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/status`} className="text-gray-400 hover:text-white text-sm">
                  {translations.footer.statusPage}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/privacy`} className="text-gray-400 hover:text-white text-sm">
                  {translations.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/terms`} className="text-gray-400 hover:text-white text-sm">
                  {translations.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ClusterEye. {translations.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
} 