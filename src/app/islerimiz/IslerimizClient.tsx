'use client';

import { FaQuoteLeft } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import ContactCTA from '@/components/ContactCTA';

const projects = [
  {
    title: "Zirkonyum Destekli Gülüş Tasarımı",
    desc: "Estetik beklentisi yüksek bir vakada, dijital planlama ve zirkonyum altyapı ile doğal görünümlü bir gülüş tasarımı tamamlandı.",
  },
  {
    title: "Implant Üstü Sabit Protez",
    desc: "Eksik diş problemi yaşayan hastaya, tam uyumlu implant üstü sabit restorasyon uygulandı. Hasta memnuniyeti üst düzeydeydi.",
  },
  {
    title: "Modelsiz CAD/CAM Uygulaması",
    desc: "Dijital ölçü alımı sonrası model gereksinimi olmadan hızlı üretim sağlayan bir diş kliniği ile modeless üretim başarıyla test edildi.",
  },
];

const testimonials = [
  {
    name: "Dr. Elif Yıldız",
    comment:
      "Dentaverax ile çalışmak, süreçlerimizi %40 hızlandırdı. Estetik kalite ve zamanında teslimat bizim için vazgeçilmez hale geldi.",
  },
  {
    name: "Dt. Mehmet Kaya",
    comment:
      "Mock-up hizmetlerinden inanılmaz memnun kaldım. Hastaları ikna sürecinde büyük fayda sağladı. Harikasınız!",
  },
];

export default function IslerimizPage() {
  return (
    <>
      {/* Projeler Section */}
      <section className="relative bg-gradient-to-tr from-[#b2f7ef] to-[#a0c4ff] dark:from-[#232946] dark:to-[#1a1a2e] pt-48 pb-32 px-4 text-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-8">İşlerimiz</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
            Dentaverax olarak sadece dental altyapılar üretmiyoruz. Kliniklerle kurduğumuz güçlü iş birlikleriyle her vakayı başarı hikayesine dönüştürüyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:scale-[1.02] transition"
            >
              <h2 className="text-xl font-semibold text-[#3ed2a7] mb-2">{item.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Yorumlar Section (Farklı arka plan) */}
      <section className="bg-white dark:bg-[#111827] py-20 md:py-24 px-4 text-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Müşterilerimiz Ne Diyor?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md text-left">
              <div className="flex gap-3 items-start">
                <FaQuoteLeft className="text-[#3ed2a7] text-xl mt-1" />
                <p className="text-gray-700 dark:text-gray-300 italic text-base md:text-lg">
                  {item.comment}
                </p>
              </div>
              <p className="mt-4 text-right font-semibold text-[#3ed2a7]">— {item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA
        title="Sizin başarınız da bir sonraki hikaye olabilir"
        description="Gerçekleştirdiğimiz başarılı vakalar gibi, sizin projenizi de birlikte hayata geçirebiliriz. Bize ulaşın."
        buttonText="İletişim Kur"
        buttonHref="/iletisim"
      />
    </>
  );
}
