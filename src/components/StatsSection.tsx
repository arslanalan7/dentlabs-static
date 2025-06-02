'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'motion/react';
import clsx from 'clsx';

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
};

type StatsSectionProps = {
  title?: string;
  description?: string;
  items?: StatItem[];
  variant?: 'default' | 'minimal' | 'inverted';
};

const defaultItems: StatItem[] = [
  { label: 'Hasta Memnuniyeti', value: 90, suffix: '%' },
  { label: 'Zamanında Teslimat', value: 95, suffix: '%' },
  { label: 'Hekim Tavsiye Oranı', value: 100, suffix: '%' },
];

export default function StatsSection({
  title = 'Dentaverax Başarı Oranları',
  description = 'Kliniklerle kurduğumuz güvene dayalı iş birlikleriyle hem hastalar hem de hekimler tarafından yüksek memnuniyet oranlarına ulaştık.',
  items = defaultItems,
  variant = 'default',
}: StatsSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={clsx(
        'py-24 px-4 transition-colors',
        variant === 'inverted'
          ? 'bg-[#3ed2a7]/10 dark:bg-[#2fb397]/10'
          : variant === 'minimal'
          ? 'bg-transparent'
          : 'bg-white dark:bg-gray-900'
      )}
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={clsx(
              'rounded-xl p-8 text-center transition shadow-md hover:shadow-xl',
              variant === 'inverted'
                ? 'bg-white/70 dark:bg-gray-800/70'
                : 'bg-white dark:bg-gray-800'
            )}
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
