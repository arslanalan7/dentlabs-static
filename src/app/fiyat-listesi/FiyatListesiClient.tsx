'use client';

import ContactCTA from '@/components/ContactCTA';

const fiyatListesi = [
  {
    kategori: 'Estetik Uygulamalar',
    urunler: [
      { isim: 'Gülüş Tasarımı (Mock-Up)', fiyat: '1.200 ₺' },
      { isim: 'Estetik Zirkonyum Kron', fiyat: '65 €' },
      { isim: 'E-Max Lamina (Cam Seramik)', fiyat: '85 €' },
    ],
  },
  {
    kategori: 'İmplant Üstü Restorasyonlar',
    urunler: [
      { isim: 'Zirkonyum İmplant Kron', fiyat: '75 €' },
      { isim: 'Metal Destekli İmplant Kron', fiyat: '60 €' },
      { isim: 'Geçici İmplant Kron', fiyat: '8 €' },
    ],
  },
  {
    kategori: 'Geçici ve Hareketli Protezler',
    urunler: [
      { isim: 'Geçici Reçine Kron', fiyat: '5 €' },
      { isim: 'Parsiyel Protez (Akrilik)', fiyat: '1.500 ₺' },
      { isim: 'Total Protez (Çift Çene)', fiyat: '3.000 ₺' },
    ],
  },
  {
    kategori: 'Koruyucu ve Destekleyici Ürünler',
    urunler: [
      { isim: 'Gece Plağı (Yumuşak)', fiyat: '900 ₺' },
      { isim: 'Bruksizm Plağı (Sert)', fiyat: '1.100 ₺' },
      { isim: 'Beyazlatma Plağı', fiyat: '600 ₺' },
    ],
  },
];

export default function FiyatListesiClient() {
  return (
    <>
      {/* Fiyat Listesi Alanı */}
      <section className="relative bg-gradient-to-tr from-[#b2f7ef] to-[#a0c4ff] dark:from-[#232946] dark:to-[#1a1a2e] pt-48 pb-32 px-4 text-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-8">
            Fiyat Listesi
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
            Dentaverax olarak kalite, estetik ve dijital hassasiyeti bir arada sunuyoruz. Aşağıda yer alan fiyatlarımız bilgilendirme amaçlıdır.
          </p>
        </div>

        {/* Fiyat Kartları */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 space-y-12">
          {fiyatListesi.map((kategori, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl dark:shadow-sm dark:hover:shadow-[0_0_20px_rgba(62,210,167,0.25)]"
            >
              <h2 className="text-xl md:text-2xl font-bold text-[#3ed2a7] border-b border-[#3ed2a7] pb-2 mb-4">
                {kategori.kategori}
              </h2>
              <ul className="divide-y divide-gray-300 dark:divide-gray-700">
                {kategori.urunler.map((urun, i) => (
                  <li
                    key={i}
                    className="flex flex-col sm:flex-row sm:justify-between py-4"
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-base sm:text-lg">
                      {urun.isim}
                    </span>
                    <span className="text-[#3ed2a7] font-semibold text-base sm:text-lg mt-1 sm:mt-0">
                      {urun.fiyat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA ayrı section olarak */}
      <ContactCTA
        title="Fiyatlarımız hakkında daha fazla bilgi ister misiniz?"
        description="Dilerseniz uzman ekibimizle görüşerek en uygun çözümü bulabilirsiniz."
        buttonText="Bize Ulaşın"
        buttonHref="/iletisim"
      />
    </>
  );

}
