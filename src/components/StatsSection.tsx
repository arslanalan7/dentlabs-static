'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'motion/react';

const stats = [
  { label: 'Hasta Memnuniyeti', value: 90, suffix: '%' },
  { label: 'Zamanında Teslimat', value: 95, suffix: '%' },
  { label: 'Hekim Tavsiye Oranı', value: 100, suffix: '%' },
];

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Dentaverax Başarı Oranları
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Kliniklerle kurduğumuz güvene dayalı iş birlikleriyle hem hastalar hem de hekimler tarafından yüksek memnuniyet oranlarına ulaştık.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-sm dark:hover:shadow-[0_0_20px_rgba(62,210,167,0.25)] p-8 text-center"
          >
            <div className="text-5xl font-extrabold text-[#3ed2a7] mb-4">
              {inView ? <CountUp end={stat.value} duration={2} suffix={stat.suffix} /> : '0'}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
