import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiyat Listesi | Dentaverax",
  description:
    "Dentaverax danışmanlık hizmetleri için uygun ve şeffaf fiyatlandırmalar. Bireysel ve kurumsal ihtiyaçlara göre esnek paket seçenekleri.",
};

export default function FiyatListesiPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Fiyat Listesi</h1>
      <div className="space-y-6">
        {[
          { title: "Başlangıç Paketi", desc: "1 saat birebir danışmanlık – ₺750" },
          { title: "Gelişim Paketi", desc: "4 haftalık gelişim takibi – ₺2.800" },
          { title: "Kurumsal Danışmanlık", desc: "İhtiyaca özel fiyatlandırma için lütfen iletişime geçin." },
        ].map((item, index) => (
          <div key={index} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
