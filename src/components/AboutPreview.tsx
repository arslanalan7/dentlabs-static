import Image from 'next/image';
import { motion } from 'motion/react';

export default function AboutPreview() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Dijital Dental Çözümlerde <span className="text-[#3ed2a7]">Güvenilir Partner</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Dentaverax olarak ileri teknoloji ile estetiği buluşturarak hekimlere ve kliniklere özel çözümler üretiyoruz. 
            Deneyimli kadromuz, dijital altyapımız ve hızlı hizmet anlayışımız ile size değer katıyoruz.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Dijital diş hekimliğinde güvenilir ve yenilikçi bir partner arıyorsanız, Dentaverax yanınızda.
          </p>
          <a
            href="/hakkimizda"
            className="inline-block bg-[#3ed2a7] hover:bg-[#32ba96] text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Hakkımızda
          </a>
        </div>
        <div className="flex justify-center">
          <Image
            src="/about-image.jpg"
            alt="Hakkımızda Görsel"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}
