import { motion } from 'motion/react';

export default function WhyUsSection() {
  const items = [
    {
      title: 'Yüksek Teknoloji',
      desc: 'CAD/CAM destekli üretim ve dijital altyapı ile hassas çözümler.',
    },
    {
      title: 'Hızlı Teslimat',
      desc: 'Zamanında üretim ve lojistik ile hekim memnuniyeti ön planda.',
    },
    {
      title: 'Estetik Odaklılık',
      desc: 'Doğal görünümlü restorasyonlar ve kişiye özel çözümler.',
    },
    {
      title: 'Uzman Kadro',
      desc: 'Alanında deneyimli tekniker ve mühendislerden oluşan ekip.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white dark:bg-gray-950">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Neden Dentaverax?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
          Kalite, hız, estetik ve teknoloji ekseninde güçlü çözümler sunuyoruz.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#f0faff] dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl dark:shadow-sm dark:hover:shadow-[0_0_20px_rgba(62,210,167,0.25)] transition"
          >
            <h3 className="text-xl font-semibold text-[#3ed2a7] mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
