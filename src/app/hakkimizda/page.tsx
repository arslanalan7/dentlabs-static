'use client'

import { FaTooth, FaTeethOpen, FaMicroscope, FaAlignCenter, FaSmile, FaShieldAlt, FaTeeth, FaStopwatch } from 'react-icons/fa';
import HeroAbout from '@/components/HeroAbout';
import StatsSection from '@/components/StatsSection';
import ContactCTA from '@/components/ContactCTA';


export default function AboutPage() {
  return (
    <>
      <HeroAbout />

      {/* Yetkinlikler / İmkanlar */}
      <section className="bg-[#f0faff] dark:bg-[#1a1a2e] py-24 px-4">
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
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-sm dark:hover:shadow-[0_0_20px_rgba(62,210,167,0.25)] p-6 flex flex-col items-center">
              <div className="text-4xl text-[#3ed2a7] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-[#3ed2a7] text-center">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
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
