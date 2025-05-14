import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
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
              Agent bazlı veritabanı izleme ve yönetim çözümü. MSSQL, MongoDB ve PostgreSQL için tam destek.
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
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Ürün</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white text-sm">
                  Özellikler
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white text-sm">
                  Fiyatlandırma
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white text-sm">
                  Dökümantasyon
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-gray-400 hover:text-white text-sm">
                  Güncellemeler
                </Link>
              </li>
            </ul>
          </div>

          {/* Şirket Bağlantıları */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Şirket</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white text-sm">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Destek Bağlantıları */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Destek</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white text-sm">
                  Yardım Merkezi
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-400 hover:text-white text-sm">
                  Durum Sayfası
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                  Kullanım Koşulları
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ClusterEye. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 