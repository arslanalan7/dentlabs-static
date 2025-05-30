// app/fiyat-listesi/page.tsx

import type { Metadata } from 'next';
import FiyatListesiClient from './FiyatListesiClient';

export const metadata: Metadata = {
  title: 'Fiyat Listesi | Dentaverax',
  description:
    'Dijital diş hekimliği çözümleri sunan Dentaverax’ın sabit, hareketli ve estetik protez uygulamaları için güncel fiyat listesini inceleyin.',
};

export default function FiyatListesiPage() {
  return <FiyatListesiClient />;
}
