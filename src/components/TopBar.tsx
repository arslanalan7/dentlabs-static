'use client';

import { useEffect, useState } from 'react';
import { FaPhone, FaClock } from 'react-icons/fa';

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const hour = now.getHours();
    const isOpenNow = day !== 0 && hour >= 9 && hour < 18;
    setIsOpen(isOpenNow);
  }, []);

  return (
    <div className="bg-[#1a1a2e] text-white text-sm px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaClock className="text-[#3ed2a7]" />
        <span className={`font-medium ${isOpen ? 'text-[#3ed2a7]' : 'text-red-400'}`}>
          {isOpen ? 'Şu anda açığız' : 'Şu anda kapalıyız'}
        </span>
        <span className="hidden md:inline text-white/80 ml-2">
          Pzt–Cmt: 09:00–18:00 / Pazar kapalı
        </span>
      </div>
      <a
        href="tel:+905551112233"
        className="flex items-center gap-2 font-semibold text-white hover:text-[#3ed2a7] transition"
      >
        <FaPhone className="text-[#3ed2a7]" />
        <span className="hidden sm:inline">+90 555 111 22 33</span>
        <span className="inline sm:hidden">Ara</span>
      </a>
    </div>
  );
}
