import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiyat Listesi | Dentaverax",
  description:
    "Dentaverax danışmanlık hizmetleri için uygun ve şeffaf fiyatlandırmalar. Bireysel ve kurumsal ihtiyaçlara göre esnek paket seçenekleri.",
};

export default function FiyatListesiPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#b2f7ef]/40 to-[#a0c4ff]/40 dark:from-[#232946]/60 dark:to-[#1a1a2e]/60 pt-32 pb-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800 dark:text-white text-center">
        Fiyat Listesi
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {[
          { title: "Başlangıç Paketi", desc: "1 saat birebir danışmanlık", price: "₺750" },
          { title: "Gelişim Paketi", desc: "4 haftalık gelişim takibi", price: "₺2.800" },
          { title: "Kurumsal Danışmanlık", desc: "İhtiyaca özel fiyatlandırma için lütfen iletişime geçin.", price: "" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/80 dark:bg-gray-900/70 rounded-xl shadow-md p-8 hover:scale-[1.03] transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-[#b2f7ef] mb-2">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{item.desc}</p>
            {item.price && (
              <span className="text-2xl font-bold text-[#7c3aed] dark:text-[#b2f7ef]">{item.price}</span>
            )}
            {!item.price && (
              <a
                href="/iletisim"
                className="mt-2 px-6 py-2 rounded-full bg-[#b2f7ef] text-[#232946] font-semibold shadow hover:bg-[#a0c4ff] transition dark:bg-[#393e46] dark:text-[#b2f7ef] dark:hover:bg-[#232946]"
              >
                İletişime Geçin
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}