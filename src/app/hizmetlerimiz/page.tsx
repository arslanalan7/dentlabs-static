// app/hizmetlerimiz/page.tsx

import type { Metadata } from 'next';
import HizmetlerimizClient from './HizmetlerimizClient';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Dentaverax',
  description:
    'Dentaverax olarak dijital diş hekimliği alanında uçtan uca laboratuvar çözümleri sunuyoruz. Klinik ihtiyaçlara özel yüksek teknolojiyle üretiyor, zamanında teslimat ve estetik beklentiyi bir araya getiriyoruz.',
};

export default function HizmetlerimizPage() {
  return <HizmetlerimizClient />;
}
