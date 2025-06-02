// ----- Client Component: HizmetlerimizClient.tsx -----
'use client';

import {
  FaMicroscope,
  FaTooth,
  FaLaptopMedical,
  FaSmile,
  FaTeeth,
  FaXRay,
} from 'react-icons/fa';
import ContactCTA from '@/components/ContactCTA';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const services = [
  {
    icon: <FaTooth className="text-4xl text-[#3ed2a7] mx-auto mb-4" />,
    title: 'Zirkonyum ve Porselen Altyapılar',
    desc: 'Yüksek dayanıklılık ve estetik sağlayan altyapılarla diş hekimlerine güvenilir çözümler sunuyoruz.',
  },
  {
    icon: <FaMicroscope className="text-4xl text-[#3ed2a7] mx-auto mb-4" />,
    title: 'Dijital Ölçü ve CAD/CAM Üretim',
    desc: 'Hassasiyetin ön planda olduğu dijital ölçüm ve bilgisayar destekli üretim teknolojileriyle donatılmış laboratuvar.',
  },
  {
    icon: <FaLaptopMedical className="text-4xl text-[#3ed2a7] mx-auto mb-4" />,
    title: 'Modeless (Model’siz) Üretim',
    desc: 'Zamandan ve malzemeden tasarruf sağlayan, doğrudan dijital veriye dayalı üretim süreçleri.',
  },
  {
    icon: <FaSmile className="text-4xl text-[#3ed2a7] mx-auto mb-4" />,
    title: 'Estetik Mock-Up ve Geçici Protezler',
    desc: 'Tedavi öncesi görselleştirme için estetik mock-up çözümleri ve konforlu geçici protezler.',
  },
  {
    icon: <FaTeeth className="text-4xl text-[#3ed2a7] mx-auto mb-4" />,
    title: 'Implant Üstü Restorasyonlar',
    desc: 'Farklı sistemlerle uyumlu, bireyselleştirilmiş implant üstü çözümler.',
  },
  {
    icon: <FaXRay className="text-4xl text-[#3ed2a7] mx-auto mb-4" />,
    title: 'Dijital Planlama ve Rehber Üretimi',
    desc: 'Karmaşık vakalarda güvenli yönlendirme sağlayan dijital cerrahi planlama ve rehber üretimi.',
  },
];

export default function HizmetlerimizClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-48 pb-36 px-6 bg-gradient-to-br from-[#b2f7ef] to-[#a0c4ff] dark:from-[#1a1a2e] dark:to-[#232946] text-gray-800 dark:text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-semibold text-gray-700 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Hizmetlerimiz
          </motion.h1>
          <motion.p
            className="text-2xl md:text-4xl italic text-gray-500 dark:text-[#b2f7ef] mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dijital diş hekimliği alanında size özel, güvenilir ve yüksek teknolojili laboratuvar hizmetleri sunuyoruz.
          </motion.p>
        </div>
      </section>

      {/* Hizmet Listesi Section */}
      <section className="bg-white dark:bg-[#111827] py-24 px-4 text-gray-800 dark:text-white">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-xl dark:shadow-sm dark:hover:shadow-[0_0_20px_rgba(62,210,167,0.25)] transition"
            >
              {service.icon}
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-[#b2f7ef]">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{service.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <ContactCTA
        title="Size en uygun dijital çözümü birlikte bulalım"
        description="Dijital diş hekimliği alanındaki tüm ihtiyaçlarınız için bizimle iletişime geçin."
        buttonText="Hemen Görüşelim"
        buttonHref="/iletisim"
      />
    </>
  );
}
