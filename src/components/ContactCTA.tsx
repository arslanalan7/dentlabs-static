'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

type ContactCTAProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function ContactCTA({
  title = 'Dijital dental çözümlerimizle tanışmaya hazır mısınız?',
  description = 'Size özel çözümler ve detaylı bilgi için bizimle iletişime geçin.',
  buttonText = 'İletişime Geçin',
  buttonHref = '/iletisim',
}: ContactCTAProps) {
  return (
    <motion.section
      className="py-16 px-6 md:px-16 bg-[#3ed2a7] dark:bg-[#2fb397] text-white mb-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-lg md:text-xl text-white/90">{description}</p>
        <Link href={buttonHref}>
          <span className="inline-block bg-white text-[#232946] font-semibold px-8 py-4 rounded-full shadow-md hover:bg-[#d9f5ef] transition">
            {buttonText}
          </span>
        </Link>
      </div>
    </motion.section>
  );
}
