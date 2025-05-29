import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Dentaverax",
  description:
    "Dentaverax, bireyler ve işletmeler için kişisel gelişim, finansal sağlık ve iş verimliliği alanlarında dijital çözümler sunan modern bir danışmanlık platformudur.",
};

export default function HakkimizdaPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#b2f7ef] to-[#a0c4ff] dark:from-[#232946] dark:to-[#1a1a2e] pt-32 pb-16 px-4">
      <div className="max-w-3xl w-full bg-white/80 dark:bg-gray-900/70 rounded-xl shadow-md p-8 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Hakkımızda
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-center">
          Dentaverax, bireyler ve küçük işletmeler için kişisel gelişim, iş verimliliği ve finansal farkındalık odaklı modern dijital çözümler sunar.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          Misyonumuz; insanların fiziksel, zihinsel ve finansal yaşam kalitesini artıracak araçlar ve danışmanlık hizmetleri ile dijital dönüşümlerine rehberlik etmektir.
        </p>
      </div>
    </section>
  );
}