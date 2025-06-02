// ----- Client Component: FiyatListesiClient.tsx -----
'use client';

import ContactCTA from '@/components/ContactCTA';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const fiyatListesi = [
  {
    kategori: 'Estetik Uygulamalar',
    urunler: [
      { isim: 'Gülüş Tasarımı (Mock-Up)', fiyat: '1.200 ₺' },
      { isim: 'Estetik Zirkonyum Kron', fiyat: '65 €' },
      { isim: 'E-Max Lamina (Cam Seramik)', fiyat: '85 €' },
    ],
  },
  {
    kategori: 'İmplant Üstü Restorasyonlar',
    urunler: [
      { isim: 'Zirkonyum İmplant Kron', fiyat: '75 €' },
      { isim: 'Metal Destekli İmplant Kron', fiyat: '60 €' },
      { isim: 'Geçici İmplant Kron', fiyat: '8 €' },
    ],
  },
  {
    kategori: 'Geçici ve Hareketli Protezler',
    urunler: [
      { isim: 'Geçici Reçine Kron', fiyat: '5 €' },
      { isim: 'Parsiyel Protez (Akrilik)', fiyat: '1.500 ₺' },
      { isim: 'Total Protez (Çift Çene)', fiyat: '3.000 ₺' },
    ],
  },
  {
    kategori: 'Koruyucu ve Destekleyici Ürünler',
    urunler: [
      { isim: 'Gece Plağı (Yumuşak)', fiyat: '900 ₺' },
      { isim: 'Bruksizm Plağı (Sert)', fiyat: '1.100 ₺' },
      { isim: 'Beyazlatma Plağı', fiyat: '600 ₺' },
    ],
  },
];

export default function FiyatListesiClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b2f7ef] to-[#a0c4ff] dark:from-[#1a1a2e] dark:to-[#232946] pt-48 pb-36 px-6 text-gray-800 dark:text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-semibold text-gray-700 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Fiyat Listesi
          </motion.h1>
          <motion.p
            className="text-2xl md:text-4xl italic text-gray-500 dark:text-[#b2f7ef] mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dentaverax olarak kalite, estetik ve dijital hassasiyeti bir arada sunuyoruz. Aşağıda yer alan fiyatlarımız bilgilendirme amaçlıdır.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Güncel kampanyalar ve özel indirimler için lütfen bizimle iletişime geçin.
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-[#3ed2a7] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#34c3a0] transition"
            >
             Özel Teklif İsteyin
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fiyat Kartları */}
      <section className="bg-white dark:bg-[#111827] py-24 px-4 text-gray-800 dark:text-white">
        <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-[#3ed2a7] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Güncel Fiyat Listemiz
        </motion.h2>
        <motion.div
          className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {fiyatListesi.map((kategori, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl dark:shadow-sm dark:hover:shadow-[0_0_20px_rgba(62,210,167,0.25)]"
            >
              <h2 className="text-xl md:text-2xl font-bold text-[#3ed2a7] border-b border-[#3ed2a7] pb-2 mb-4">
                {kategori.kategori}
              </h2>
              <ul className="divide-y divide-gray-300 dark:divide-gray-700">
                {kategori.urunler.map((urun, i) => (
                  <li
                    key={i}
                    className="flex flex-col sm:flex-row sm:justify-between py-4"
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-base sm:text-lg">
                      {urun.isim}
                    </span>
                    <span className="text-[#3ed2a7] font-semibold text-base sm:text-lg mt-1 sm:mt-0">
                      {urun.fiyat}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <ContactCTA
        title="Fiyatlarımız hakkında daha fazla bilgi ister misiniz?"
        description="Dilerseniz uzman ekibimizle görüşerek en uygun çözümü bulabilirsiniz."
        buttonText="Bize Ulaşın"
        buttonHref="/iletisim"
      />
    </>
  );
}
