'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { href: '/', label: 'Anasayfa' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/hizmetlerimiz', label: 'Hizmetlerimiz' },
    { href: '/islerimiz', label: 'İşlerimiz' },
    { href: '/fiyat-listesi', label: 'Fiyat Listesi' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0f172a]/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/dentaverax-logo.svg"
            alt="Dentaverax Logo"
            width={40}
            height={40}
            priority
            className="transition dark:invert"
          />
          <span className="text-2xl font-bold text-gray-800 dark:text-[#b2f7ef]">Dentaverax</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-semibold transition ${
                pathname === link.href
                  ? 'text-black dark:text-[#b2f7ef] underline underline-offset-4 decoration-[#3ed2a7]'
                  : 'text-gray-700 dark:text-[#b2f7ef]/80 hover:text-black dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Sağda karanlık mod ve sosyal ikonlar */}
        <div className="hidden md:flex items-center gap-4">
          <DarkModeToggle />
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-[#b2f7ef]/80 hover:text-pink-400 transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-[#b2f7ef]/80 hover:text-blue-400 transition">
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center text-gray-700 dark:text-[#b2f7ef]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FaBars size={28} />
        </button>
      </div>

      {/* Mobile Menu - Animated */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden backdrop-blur-md bg-white/80 dark:bg-[#0f172a]/50 px-6 pb-6 shadow-md"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-semibold transition ${
                    pathname === link.href
                      ? 'text-black dark:text-[#b2f7ef] underline underline-offset-4 decoration-[#3ed2a7]'
                      : 'text-gray-700 dark:text-[#b2f7ef]/80 hover:text-black dark:hover:text-white'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 mt-2">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-[#b2f7ef]/80 hover:text-pink-400 transition">
                  <FaInstagram size={20} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-[#b2f7ef]/80 hover:text-blue-400 transition">
                  <FaLinkedin size={20} />
                </a>
                <DarkModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
