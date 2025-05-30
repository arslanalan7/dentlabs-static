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
  return (
    <>
      <section className="relative bg-gradient-to-tr from-[#b2f7ef] to-[#a0c4ff] dark:from-[#232946] dark:to-[#1a1a2e] pt-48 pb-32 px-4 text-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-8">
            Hizmetlerimiz
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
            Dentaverax olarak dijital diş hekimliği alanında uçtan uca laboratuvar çözümleri sunuyoruz. Klinik ihtiyaçlara özel yüksek teknolojiyle üretiyor, zamanında teslimat ve estetik beklentiyi bir araya getiriyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        </div>
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
