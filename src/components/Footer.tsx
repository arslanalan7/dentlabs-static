import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-12 border-t border-white/10">
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
              className="transition invert"
            />
            <span className="text-2xl font-bold text-white">Dentaverax</span>
          </Link>
          <p className="text-white/70 leading-relaxed max-w-xs mt-2 text-center md:text-left">
            Dijital Dental Çözümler ve CAD/CAM Laboratuvarı.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-lg font-semibold mb-2">Hızlı Erişim</h3>
          <ul className="space-y-1 text-white/80">
            <li><Link href="/hakkimizda" className="hover:text-white transition">Hakkımızda</Link></li>
            <li><Link href="/hizmetlerimiz" className="hover:text-white transition">Hizmetlerimiz</Link></li>
            <li><Link href="/islerimiz" className="hover:text-white transition">İşlerimiz</Link></li>
            <li><Link href="/fiyat-listesi" className="hover:text-white transition">Fiyat Listesi</Link></li>
            <li><Link href="/iletisim" className="hover:text-white transition">İletişim</Link></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-lg font-semibold mb-2">Bize Ulaşın</h3>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white" />
              <a href="mailto:hello@dentaverax.com" className="hover:text-white transition">hello@dentaverax.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-white" />
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-white" />
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-white/60 py-4 border-t border-white/10">
        © {new Date().getFullYear()} Dentaverax. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
