'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const partners = [
  { name: 'Partner 1', logo: '/logos/logo1.jpg' },
  { name: 'Partner 2', logo: '/logos/logo2.jpg' },
  { name: 'Partner 3', logo: '/logos/logo3.jpg' },
  { name: 'Partner 4', logo: '/logos/logo4.jpg' },
  { name: 'Partner 5', logo: '/logos/logo5.jpg' },
];

export default function PartnersSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">İş Ortaklarımız</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Dentaverax olarak güvenilir çözüm ortaklarımızla birlikte kalite ve süreklilik sunuyoruz.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {partners.map((partner, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
          >
            <Image src={partner.logo} alt={partner.name} width={120} height={60} className="object-contain" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
