// ----- Client Component: IslerimizPage.tsx -----
'use client';

import { FaQuoteLeft } from 'react-icons/fa';
import ContactCTA from '@/components/ContactCTA';
import StatsSection from '@/components/StatsSection';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Zirkonyum Destekli Gülüş Tasarımı',
    desc: 'Estetik beklentisi yüksek bir vakada, dijital planlama ve zirkonyum altyapı ile doğal görünümlü bir gülüş tasarımı tamamlandı.',
  },
  {
    title: 'Implant Üstü Sabit Protez',
    desc: 'Eksik diş problemi yaşayan hastaya, tam uyumlu implant üstü sabit restorasyon uygulandı. Hasta memnuniyeti üst düzeydeydi.',
  },
  {
    title: 'Modelsiz CAD/CAM Uygulaması',
    desc: 'Dijital ölçü alımı sonrası model gereksinimi olmadan hızlı üretim sağlayan bir diş kliniği ile modeless üretim başarıyla test edildi.',
  },
];

const testimonials = [
  {
    name: 'Dr. Elif Yıldız',
    comment:
      'Dentaverax ile çalışmak, süreçlerimizi %40 hızlandırdı. Estetik kalite ve zamanında teslimat bizim için vazgeçilmez hale geldi.',
  },
  {
    name: 'Dt. Mehmet Kaya',
    comment:
      'Mock-up hizmetlerinden inanılmaz memnun kaldım. Hastaları ikna sürecinde büyük fayda sağladı. Harikasınız!',
  },
];

export default function IslerimizPage() {
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
            İşlerimiz
          </motion.h1>
          <motion.p
            className="text-2xl md:text-4xl italic text-gray-500 dark:text-[#b2f7ef] mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dentaverax olarak sadece dental altyapılar üretmiyoruz. Kliniklerle kurduğumuz güçlü iş birlikleriyle her vakayı başarı hikayesine dönüştürüyoruz.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Başarıya ulaşmak için doğru iş ortağı ile çalışmak şart. Projelerinizi birlikte hayata geçirelim.
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-[#3ed2a7] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#34c3a0] transition"
            >
             Bize Ulaşın
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projeler Section */}
      <section className="bg-white dark:bg-[#111827] py-24 px-4 text-gray-800 dark:text-white">
        <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-[#3ed2a7] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Son Projelerimizden Bazıları
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl dark:shadow-sm dark:hover:shadow-[0_0_20px_rgba(62,210,167,0.25)] transition"
            >
              <h2 className="text-xl font-semibold text-[#3ed2a7] mb-2">{item.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Yorumlar Section */}
      <section className="bg-[#f0faff] dark:bg-[#1a1a2e] py-20 md:py-24 px-4 text-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            Müşterilerimiz Ne Diyor?
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl dark:shadow-sm dark:hover:shadow-[0_0_20px_rgba(62,210,167,0.25)] text-left"
            >
              <div className="flex gap-3 items-start">
                <FaQuoteLeft className="text-[#3ed2a7] text-xl mt-1" />
                <p className="text-gray-700 dark:text-gray-300 italic text-base md:text-lg">
                  {item.comment}
                </p>
              </div>
              <p className="mt-4 text-right font-semibold text-[#3ed2a7]">— {item.name}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <StatsSection
        variant="inverted"
        title="Klinik Performans Verilerimiz"
        description="Deneyim ve güvene dayalı klinik sonuçlarımız."
        items={[
          { label: 'Tamamlanan Vaka', value: 1200 },
          { label: 'Ortalama Teslim Süresi', value: 2.4, suffix: ' gün' },
          { label: 'Tekrar Sipariş Oranı', value: 88, suffix: '%' },
        ]}
      />

      <ContactCTA
        title="Sizin başarınız da bir sonraki hikaye olabilir"
        description="Gerçekleştirdiğimiz başarılı vakalar gibi, sizin projenizi de birlikte hayata geçirebiliriz. Bize ulaşın."
        buttonText="İletişim Kur"
        buttonHref="/iletisim"
      />
    </>
  );
}
