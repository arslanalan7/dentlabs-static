import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İşlerimiz | Dentaverax",
  description:
    "Gerçek müşterilerle gerçekleştirdiğimiz başarılı projeler, vaka analizleri ve dönüşüm hikayelerini inceleyin.",
};

export default function IslerimizPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">İşlerimiz</h1>
      <div className="space-y-6">
        {[
          {
            title: "Küçük İşletme Dijitalleşmesi",
            desc: "Bir kafe zinciri için dijital rezervasyon ve analiz sistemi kurduk. 3 ayda müşteri sadakati %35 arttı.",
          },
          {
            title: "Finansal Planlama Mentorluğu",
            desc: "Bireysel danışanlarımızın harcama takibi ve yatırım farkındalığını artırarak bütçe yönetimi geliştirdik.",
          },
        ].map((item, index) => (
          <div key={index} className="p-6 rounded shadow bg-gray-100 dark:bg-gray-800">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
