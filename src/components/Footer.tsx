import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#b2f7ef]/60 to-[#a0c4ff]/60 dark:from-[#232946]/80 dark:to-[#1a1a2e]/80 text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-gray-700 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 text-sm">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/dentaverax-logo.svg"
              alt="Dentaverax Logo"
              width={48}
              height={48}
              priority
              className="transition dark:invert"
            />
            <span className="text-2xl font-bold text-[#232946] dark:text-[#b2f7ef]">Dentaverax</span>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs mt-2 text-center md:text-left">
            Dijital Dental Çözümler ve CAD/CAM Laboratuvarı.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-lg font-semibold mb-2">Hızlı Erişim</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/hakkimizda" className="hover:underline">Hakkımızda</Link></li>
            <li><Link href="/hizmetlerimiz" className="hover:underline">Hizmetlerimiz</Link></li>
            <li><Link href="/islerimiz" className="hover:underline">İşlerimiz</Link></li>
            <li><Link href="/fiyat-listesi" className="hover:underline">Fiyat Listesi</Link></li>
            <li><Link href="/iletisim" className="hover:underline">İletişim</Link></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-lg font-semibold mb-2">Bize Ulaşın</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              <a href="mailto:hello@dentaverax.com" className="hover:underline">hello@dentaverax.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-lg" />
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-lg" />
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} Dentaverax. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}