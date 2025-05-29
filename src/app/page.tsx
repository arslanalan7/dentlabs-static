'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#b2f7ef] to-[#a0c4ff] dark:from-[#232946] dark:to-[#1a1a2e] relative overflow-hidden flex flex-col justify-center">
      {/* Partikül efekti */}
      <ParticlesBackground />

      {/* Dekoratif Oval ve Yıldızlar */}
      <svg
        width="525"
        height="300"
        viewBox="0 0 350 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-16 right-16 z-0 pointer-events-none"
      >
        <ellipse
          cx="175"
          cy="100"
          rx="150"
          ry="70"
          stroke="#fff"
          strokeWidth="1"
          opacity="0.5"
          transform="rotate(-30 175 100)" // 90 derece sola döndürme
        />
        <g>
          <polygon
            points="60,33 62,39 68,40 62,41 60,47 58,41 52,40 58,39"
            fill="#fff"
            opacity="0.8"
          />
          <polygon
            points="300,55 302,60 308,61 302,62 300,67 298,62 292,61 298,60"
            fill="#fff"
            opacity="0.7"
          />
          <polygon
            points="250,143 252,149 258,150 252,151 250,157 248,151 242,150 248,149"
            fill="#fff"
            opacity="0.7"
          />
        </g>
      </svg>

      {/* Hero İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:px-6 py-16 md:h-[calc(100vh-96px)]">
        {/* Sol: Görsel (3/2) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center md:justify-start md:col-span-2 h-72 md:h-full"
        >
          <Image
            src="/woman.png"
            alt="Dijital Dental"
            width={400}
            height={800}
            className="h-72 md:h-[calc(100vh-99px)] w-auto object-cover"
            priority
          />
        </motion.div>

        {/* Sağ: Başlık ve CTA (3/1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start gap-8 md:col-span-1 mt-8 md:mt-0"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-700 dark:text-white">
              Dijital Dental
            </h1>
            <p className="text-2xl md:text-4xl italic text-gray-500 dark:text-[#b2f7ef] mt-2">
              yenilikçi yaklaşım
            </p>
          </div>
          <a
            href="/iletisim"
            className="px-8 py-4 rounded-full text-xl md:text-2xl font-semibold bg-[#b2f7ef] text-[#232946] shadow-lg hover:bg-[#a0c4ff] transition dark:bg-[#393e46] dark:text-[#b2f7ef] dark:hover:bg-[#232946]"
          >
            Bize Ulaşın
          </a>
        </motion.div>
      </div>
    </main>
  );
}