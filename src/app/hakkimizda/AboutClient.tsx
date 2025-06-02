// ----- Client Component: about/AboutClient.tsx -----
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  FaTooth,
  FaTeethOpen,
  FaMicroscope,
  FaAlignCenter,
  FaSmile,
  FaShieldAlt,
  FaTeeth,
  FaStopwatch,
  FaBullseye,
  FaRocket,
} from 'react-icons/fa';
import StatsSection from '@/components/StatsSection';
import ContactCTA from '@/components/ContactCTA';
import { motion } from 'motion/react';

export default function AboutClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hero section */}
      <section className="pt-40 pb-36 px-6 bg-gradient-to-br from-[#b2f7ef] to-[#a0c4ff] dark:from-[#1a1a2e] dark:to-[#232946] text-gray-800 dark:text-white relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-700 dark:text-white leading-tight">
              Dijital Dentalin Yeni Tanımı
            </h1>
            <p className="text-2xl md:text-4xl italic text-gray-500 dark:text-[#b2f7ef] mt-2">
              Deneyim, estetik ve teknoloji odaklı çözümler sunan Dentaverax ile tanışın.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/about-hero-illustration.png"
              alt="Dentaverax dijital dişçilik illüstrasyonu"
              width={400}
              height={400}
              className="ml-auto drop-shadow-xl rounded-full shadow-md hover:shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Misyon + Vizyon modern blok düzen */}
      <motion.section
        className="py-24 px-6 bg-white dark:bg-[#111827] text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Biz Kimiz?</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Dentaverax, 2014 yılında dijital diş hekimliği alanında uzman, yenilikçi bir kadro ile kurulmuştur. Kalite, hız ve estetik temel alan yaklaşımıyla kliniklere yüksek teknolojili çözümler sunmaktadır.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition flex-1">
            <h3 className="text-xl font-semibold text-[#3ed2a7] mb-2 flex items-center gap-2">
              <FaBullseye className="text-[#3ed2a7]" /> Misyonumuz
            </h3>
            <p className="text-gray-800 dark:text-gray-300">
              Diş hekimlerinin ve kliniklerin tüm ihtiyaçlarına ulaşılabilir, yüksek kaliteli, hızlı ve uçtan çözümler sunmak. Hasta memnuniyetini ve hekim verimliliğini artırmak için çalışıyoruz.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition flex-1">
            <h3 className="text-xl font-semibold text-[#3ed2a7] mb-2 flex items-center gap-2">
              <FaRocket className="text-[#3ed2a7]" /> Vizyonumuz
            </h3>
            <p className="text-gray-800 dark:text-gray-300">
              Dijital dental çözümler alanında, yenilikçi üretim teknikleriyle global pazarda tanınan ve güvenilen bir laboratuvar olmak.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Yetkinlikler / İmkanlar */}
      <motion.section
        className="bg-[#f0faff] dark:bg-[#1a1a2e] py-24 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3ed2a7] mb-4">Dentaverax Yetkinlikleri</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dentaverax olarak sunduğumuz dijital hizmetler ve teknik altyapılarla üretim süreçlerinde hız, doğruluk ve estetik sağlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center text-center">
          {[ 
            { icon: <FaTooth />, title: 'Genel Dişçilik', desc: 'Güncel tedavi planlamaları' },
            { icon: <FaTeethOpen />, title: 'İmplant Üretimi', desc: 'Titanyum uyumlu altyapılar' },
            { icon: <FaMicroscope />, title: 'Dijital Cerrahi', desc: 'CAD/CAM destekli kesim' },
            { icon: <FaAlignCenter />, title: 'Hizalama Çözümleri', desc: 'Ortodotik planlama destekli' },
            { icon: <FaSmile />, title: 'Beyazlatma', desc: 'Estetik öncelikli çözümler' },
            { icon: <FaShieldAlt />, title: 'Diş Koruma', desc: 'Ağız koruyucular ve gece plağı' },
            { icon: <FaTeeth />, title: 'Protez Üretimi', desc: 'Estetik ve konfor odaklı' },
            { icon: <FaStopwatch />, title: 'Hızlı Üretim', desc: 'Zamandan kazandıran sistemler' },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center">
              <div className="text-4xl text-[#3ed2a7] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-[#3ed2a7] text-center">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <StatsSection />

      <ContactCTA
        title="Bizimle tanışmak ister misiniz?"
        description="Dentaverax’ın yaklaşımını ve değerlerini daha yakından tanımak için iletişime geçebilirsiniz."
        buttonText="Bize Ulaşın"
        buttonHref="/iletisim"
      />
    </>
  );
}
