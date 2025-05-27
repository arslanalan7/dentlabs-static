import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İşlerimiz | Dentaverax",
  description:
    "Gerçek müşterilerle gerçekleştirdiğimiz başarılı projeler, vaka analizleri ve dönüşüm hikayelerini inceleyin.",
};

const projects = [
  {
    title: "Küçük İşletme Dijitalleşmesi",
    desc: "Bir kafe zinciri için dijital rezervasyon ve analiz sistemi kurduk. 3 ayda müşteri sadakati %35 arttı.",
  },
  {
    title: "Finansal Planlama Mentorluğu",
    desc: "Bireysel danışanlarımızın harcama takibi ve yatırım farkındalığını artırarak bütçe yönetimi geliştirdik.",
  },
  // Yeni projeler ekleyebilirsiniz
];

export default function IslerimizPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#b2f7ef]/40 to-[#a0c4ff]/40 dark:from-[#232946]/60 dark:to-[#1a1a2e]/60 pt-32 pb-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800 dark:text-white text-center">
        İşlerimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-white/80 dark:bg-gray-900/70 rounded-xl shadow-md p-6 hover:scale-[1.03] transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-[#b2f7ef]">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}